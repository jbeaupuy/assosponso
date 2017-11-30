import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserService } from '../shared/user.service';
import 'rxjs/add/operator/filter';
import { APP_CONSTANT } from '../app.constant';


@Component({
  selector: 'app-list-sponsors',
  templateUrl: './list-sponsors.component.html',
  styleUrls: ['./list-sponsors.component.css']
})
export class ListSponsorsComponent implements OnInit {

  assos: any;
  sponsos: any;
  domaines: object = APP_CONSTANT.DOMAINES;

  constructor(private http: Http, private user: UserService) {}

  ngOnInit() {
    this.chargeinfo();
  }

  change(event) {
    this.chargeinfo(event.value);
  }

  chargeinfo(dom = null) {
    this.assos = this.user.assoList(dom).map(r => r.json());
    this.sponsos = this.user.sponsorsList(dom).map(r => r.json());
  }

}
