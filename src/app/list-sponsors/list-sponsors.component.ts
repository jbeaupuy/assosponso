import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-list-sponsors',
  templateUrl: './list-sponsors.component.html',
  styleUrls: ['./list-sponsors.component.css']
})
export class ListSponsorsComponent implements OnInit {

  assos: any;
  sponsos: any;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('assets/data/association.json')
      .subscribe(function (res) {
        this.assos = res.json();
        console.log(this.assos);
      });
    this.http.get('assets/data/sponsors.json')
      .subscribe(function (res) {
        this.sponsos = res.json();
        console.log(this.sponsos);
      });
  }

}
