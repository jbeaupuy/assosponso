import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  API = "";

  constructor(private http: Http) {
    this.API = environment.production ? "http://assosponso.alwaysdata.net:3000" : "http://localhost:3000";
  }

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
