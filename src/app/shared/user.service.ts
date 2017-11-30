import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  API = "http://localhost:3000";

  constructor(private http: Http) { }

  public assoAdd(name, mail, pass, domaines) {
    return this.http.post(`${this.API}/asso_add`, { name: name, mail: mail, pass: pass, doms: domaines });
  }

  public assoGet() {

  }

  public assoList(dom) {
    return this.http.post(`${this.API}/asso_list`, { domaine: dom });
  }

  public sponsorsList(dom) {
    return this.http.post(`${this.API}/sponso_list`, { domaine: dom });
  }

}
