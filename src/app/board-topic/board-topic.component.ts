import { AlertService } from './../alert.service';
import { BoardService } from './../board.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-board-topic',
  templateUrl: './board-topic.component.html',
  styles: []
})
export class BoardTopicComponent implements OnInit {

  boardId: any;
  topics = [];
  boardName: any;
  modalAddTopicGuest = false;
  modalAddTopicUser = false;
  modalLogin = false;
  username: any;
  password: any;
  usernameLoginOnly: any;
  passwordLoginOnly: any;
  jwtHelper: JwtHelper = new JwtHelper();
  type = 'guest';
  header: any;
  detail: any;
  fname: any;
  lname: any;
  email: any;
  hospcode: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boardService: BoardService,
    private alertService: AlertService,
    private cookieService: CookieService
  ) {
    const token = this.cookieService.get('mmis_board_token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      if (decodedToken) {
        this.type = decodedToken.type;
      }
    }
  }

  async ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.boardId = params.boardId;
      });
    await this.getBoardInfo();
    await this.getTopics();
  }

  async getBoardInfo() {
    try {
      const rs: any = await this.boardService.getBoardInfo(this.boardId);
      if (rs.ok) {
        if (rs.rows.length) {
          this.boardName = rs.rows[0].board_name;
        } else {
          this.router.navigateByUrl(`/board`);
        }
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }
  openLogin() {
    this.username = '';
    this.password = '';
    this.modalLogin = true;
  }
  async login() {
    try {
      const rs: any = await this.boardService.login(this.username, this.password);
      if (rs.ok) {
        const token = rs.rows;
        const decodedToken = this.jwtHelper.decodeToken(token);
        this.cookieService.set('mmis_board_token', token);
        this.type = decodedToken.type;
        this.modalAddTopicGuest = false;
        this.modalAddTopicUser = true;
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  enterLogin(e) {
    if (e.keyCode === 13) {
      this.login();
    }
  }

  enterLoginOnly(e) {
    if (e.keyCode === 13) {
      this.loginOnly();
    }
  }

  async loginOnly() {
    try {
      const rs: any = await this.boardService.login(this.usernameLoginOnly, this.passwordLoginOnly);
      if (rs.ok) {
        const token = rs.rows;
        const decodedToken = this.jwtHelper.decodeToken(token);
        this.cookieService.set('mmis_board_token', token);
        this.type = decodedToken.type;
        this.modalLogin = false;
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  logout() {
    this.cookieService.delete('mmis_board_token');
    this.type = 'guest';
  }

  addTopic() {
    if (this.type === 'user') {
      this.header = '';
      this.detail = '';
      this.modalAddTopicUser = true;
    } else {
      this.username = '';
      this.password = '';
      this.modalAddTopicGuest = true;
    }
  }

  async getTopics() {
    try {
      const rs: any = await this.boardService.getTopics(this.boardId);
      if (rs.ok) {
        this.topics = rs.rows;
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  async saveWithUser() {
    try {
      const token = this.cookieService.get('mmis_board_token');
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(decodedToken);
      const obj: any = {
        board_topic_name: this.header,
        board_topic_detail: this.detail,
        board_id: this.boardId,
        user_id: decodedToken.user_id
      };
      const rs = await this.boardService.saveTopic(obj);
      if (rs.ok) {
        this.router.navigateByUrl(`/board/topic/detail?topicId=${rs.rows}`);
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  async saveWithGuest() {
    try {

      const user: any = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        hospcode: this.hospcode,
        type: 'guest'
      };

      const rsUserId = await this.boardService.saveUser(user);
      const obj: any = {
        board_topic_name: this.header,
        board_topic_detail: this.detail,
        board_id: this.boardId,
        user_id: rsUserId.rows
      };
      const rs = await this.boardService.saveTopic(obj);
      if (rs.ok) {
        this.router.navigateByUrl(`/board/topic/detail?topicId=${rs.rows}`);
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

}


