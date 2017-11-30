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
    this.assos = this.http.get('assets/data/association.json').map(r => r.json());
    this.sponsos = this.http.get('assets/data/sponsors.json').map(r => r.json());
  }

  change(event) {
    this.assos = this.assos.filter(data => data.domaines === event.value);
    this.sponsos = this.sponsos.filter(data => data.domaines === event.value);
  }

}
