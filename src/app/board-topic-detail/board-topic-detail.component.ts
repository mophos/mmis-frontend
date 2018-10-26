import { AlertService } from './../alert.service';
import { BoardService } from './../board.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelper } from 'angular2-jwt';
import * as _ from 'lodash';
@Component({
  selector: 'app-board-topic-detail',
  templateUrl: './board-topic-detail.component.html',
  styles: []
})
export class BoardTopicDetailComponent implements OnInit {

  topicId: any;
  details = [];
  topics: any = {};
  topicName: any;
  topicDetail: any;
  comment: any;
  loadding = false;
  jwtHelper: JwtHelper = new JwtHelper();
  type = 'guest';
  username: any;
  password: any;
  fname: any;
  lname: any;
  email: any;
  hospcode: any;
  modalLogin = false;
  isSave = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boardService: BoardService,
    private cookieService: CookieService,
    private alertService: AlertService
  ) {
    const token = this.cookieService.get('mmis_board_token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.type = decodedToken.type;
    }
  }

  async ngOnInit() {
    await this.route.queryParams
      .subscribe(params => {
        this.topicId = params.topicId;
      });
    await this.getTopicInfo();
    await this.getTopicDetails();
  }

  logout() {
    this.cookieService.delete('mmis_board_token');
    this.type = 'guest';
  }

  openLogin() {
    this.username = '';
    this.password = '';
    this.modalLogin = true;
  }

  enterLogin(e) {
    if (e.keyCode === 13) {
      this.login();
    }
  }

  async login() {
    try {
      this.isSave = true;
      const rs: any = await this.boardService.login(this.username, this.password);
      if (rs.ok) {
        const token = rs.rows;
        const decodedToken = this.jwtHelper.decodeToken(token);
        this.cookieService.set('mmis_board_token', token);
        this.type = decodedToken.type;
        this.modalLogin = false;
        this.isSave = false;
      } else {
        this.isSave = false;
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.isSave = false;
      this.alertService.error(error);
    }
  }

  async getTopicInfo() {
    try {
      const rs: any = await this.boardService.getTopicInfo(this.topicId);
      if (rs.ok) {
        if (rs.rows.length) {
          this.topics = rs.rows[0];
        } else {
          this.router.navigateByUrl(`/board`);
        }
      }
    } catch (error) {
      console.log(error);

    }
  }
  async getTopicDetails() {
    try {
      const rs: any = await this.boardService.getTopicDetails(this.topicId, this.type);
      if (rs.ok) {
        this.details = rs.rows;
        for (const v of this.details) {
          console.log(v.detail);
          v.detail = v.detail.split('\n').join('<br>');

          console.log(v.detail);
        }
      }
    } catch (error) {
      console.log(error);

    }
  }

  reset() {
    this.comment = null;
    this.fname = null;
    this.lname = null;
    this.email = null;
    this.hospcode = null;
  }

  async saveWithUser() {
    try {
      this.loadding = true;
      this.isSave = true;
      const token = this.cookieService.get('mmis_board_token');
      if (token) {
        const decodedToken = this.jwtHelper.decodeToken(token);
        const data: any = {
          user_id: decodedToken.user_id,
          board_topic_id: this.topicId,
          detail: this.comment
        };
        const rs: any = await this.boardService.saveComment(data);
        this.loadding = false;
        this.isSave = false;
        if (rs.ok) {
          await this.reset();
          await this.getTopicDetails();
        } else {
          this.alertService.error(rs.error);
        }
      } else {
        this.isSave = false;
        this.loadding = false;
        this.alertService.error('กรุณา login ใหม่');
      }
    } catch (error) {
      this.isSave = false;
      console.log(error);
      this.alertService.serverError();
    }
  }

  async saveWithGuest() {
    try {
      this.loadding = true;
      this.isSave = true;
      const user: any = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        hospcode: this.hospcode,
        type: 'guest'
      };
      const rsUserId = await this.boardService.saveUser(user);
      const data: any = {
        user_id: rsUserId.rows,
        board_topic_id: this.topicId,
        detail: this.comment
      };
      const rs: any = await this.boardService.saveComment(data);
      this.loadding = false;
      this.isSave = false;
      if (rs.ok) {
        await this.reset();
        await this.getTopicDetails();
      } else {
        this.alertService.error(rs.error);
      }

    } catch (error) {
      this.isSave = false;
      console.log(error);
      this.alertService.serverError();
    }
  }
  async hideComment(boardTopicDetailId) {
    try {
      await this.boardService.hideComment(boardTopicDetailId);
      const idx = _.findIndex(this.details, { 'board_topic_detail_id': boardTopicDetailId });
      this.details[idx].is_delete = 'Y';
    } catch (error) {
      this.alertService.error(error);
    }
  }

}

