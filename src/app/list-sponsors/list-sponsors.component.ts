import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {APP_CONSTANT} from '../app.constant';


@Component({
  selector: 'app-list-sponsors',
  templateUrl: './list-sponsors.component.html',
  styleUrls: ['./list-sponsors.component.css']
})
export class ListSponsorsComponent implements OnInit {

  assos: any;
  sponsos: any;
  domaines: object = APP_CONSTANT.DOMAINES;

  constructor(private http: Http) {}

  ngOnInit() {
    this.chargeinfo();
  }

  change(event) {
    this.chargeinfo();
    console.log(event.value);
    this.assos = this.assos.filter(data => {
      if (event.value) {
        console.log(data);
        return data.domaines === event.value;
      } else {
        return true;
      }
    });
    this.sponsos = this.sponsos.filter(data => {
      if (event.value) {
        return data.domaines === event.value;
      } else {
        return true;
      }
    });
  }

  chargeinfo() {
    this.assos = this.http.get('assets/data/association.json').map(r => r.json());
    this.sponsos = this.http.get('assets/data/sponsors.json').map(r => r.json());
  }

}
