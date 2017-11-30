import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-list-sponsors',
  templateUrl: './list-sponsors.component.html',
  styleUrls: ['./list-sponsors.component.css']
})
export class ListSponsorsComponent implements OnInit {

  assos: any;
  sponsos: any;

  constructor(private http: Http, private user: UserService) {}

  ngOnInit() {
    this.assos = this.user.assoList().map(r => r.json());
    this.sponsos = this.user.sponsorsList().map(r => r.json());
  }

}
