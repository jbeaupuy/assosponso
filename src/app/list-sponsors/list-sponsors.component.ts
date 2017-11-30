import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
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
  displayAsso = true;
  displaySponso = true;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.chargeinfo();
  }

  change(event) {
    this.chargeinfo();
    console.log(event.value);
    this.assos = this.assos.filter(sponso => {
      if (event.value) {
        console.log(sponso);
        return sponso.domaines === event.value;
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

  private chargeinfo() {
    this.assos = this.http.get('assets/data/association.json').map(r => r.json());
    this.sponsos = this.http.get('assets/data/sponsors.json').map(r => r.json());
  }

  showHide(type) {
    if (type === 'asso') {
      this.displayAsso = !this.displayAsso;
    } else if (type === 'sponso') {
      this.displaySponso = !this.displaySponso;
    }
  }

}
