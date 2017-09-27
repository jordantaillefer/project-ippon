import { Component, OnInit } from '@angular/core';

import { Deals } from '../../assets/mocks/deals';


@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  deals = Deals;

  constructor() { }

  ngOnInit() {

  }

}
