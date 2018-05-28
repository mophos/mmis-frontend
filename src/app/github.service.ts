import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }
  async getRelease() {
    const url = `https://api.github.com/repos/mophos/mmis-docker-build/releases`;
    const resp = await this.http.get(`${url}`).toPromise();
    return resp;
    // return true;
  }
}