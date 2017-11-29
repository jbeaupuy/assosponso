import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ASSOS_CONST} from '../../assets/data/associations';
import {SPONSOS_CONST} from '../../assets/data/sponsors';


@Component({
  selector: 'app-list-sponsors',
  templateUrl: './list-sponsors.component.html',
  styleUrls: ['./list-sponsors.component.css']
})
export class ListSponsorsComponent implements OnInit {

  assos: any;
  sponsos: any;

  constructor() {}

  ngOnInit() {
    this.assos = ASSOS_CONST.ASSOS;
    this.sponsos = SPONSOS_CONST.SPONSO;
  }

}
