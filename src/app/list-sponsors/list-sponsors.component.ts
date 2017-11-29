import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


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
    this.assos = this.http.get('assets/data/association.json').map(r => r.json());
    this.sponsos = this.http.get('assets/data/sponsors.json').map(r => r.json());
  }

}
