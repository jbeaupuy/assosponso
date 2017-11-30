import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  API = "http://localhost:3000";

  constructor(private http: Http) { }

  public assoAdd(name, mail, pass) {
    return this.http.post(`${this.API}/asso_add`, { name: name, mail: mail, pass: pass });
  }

  public assoGet() {

  }

  public assoList() {
    return this.http.post(`${this.API}/asso_list`, {});
  }

  public sponsorsList() {
    return this.http.post(`${this.API}/sponso_list`, {});
  }

}
