import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) { }

  async getBoards() {
    const res: any = await this.http.get(`${this.apiUrl}/boards/`).toPromise();
    return res;
  }

  async getBoardInfo(boardId) {
    const res: any = await this.http.get(`${this.apiUrl}/boards/info?boardId=${boardId}`).toPromise();
    return res;
  }

  async getTopics(boardId) {
    const res: any = await this.http.get(`${this.apiUrl}/boards/topics?boardId=${boardId}`).toPromise();
    return res;
  }

  async getTopicInfo(topicId) {
    const res: any = await this.http.get(`${this.apiUrl}/boards/topic/info?topicId=${topicId}`).toPromise();
    return res;
  }

  async getTopicDetails(topicId, type) {
    const res: any = await this.http.get(`${this.apiUrl}/boards/topic/details?topicId=${topicId}&type=${type}`).toPromise();
    return res;
  }

  async login(username, password) {
    const res: any = await this.http.post(`${this.apiUrl}/login/board`, {
      username: username,
      password: password
    }).toPromise();
    return res;
  }

  async saveTopic(data) {
    const res: any = await this.http.post(`${this.apiUrl}/boards/topics`, {
      data: data
    }).toPromise();
    return res;
  }

  async saveUser(data) {
    const res: any = await this.http.post(`${this.apiUrl}/boards/user`, {
      data: data
    }).toPromise();
    return res;
  }

  async saveComment(data) {
    const res: any = await this.http.post(`${this.apiUrl}/boards/comment`, {
      data: data
    }).toPromise();
    return res;
  }

  async hideComment(boardTopicDetailId) {
    const res: any = await this.http.delete(`${this.apiUrl}/boards/comment?boardTopicDetailId=${boardTopicDetailId}`).toPromise();
    return res;
  }

}
