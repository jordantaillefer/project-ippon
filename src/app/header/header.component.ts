import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuList: Array<String> = ['SELL YOUR VEHICLE', 'SEARCH INVENTORY', 'HOW IT WORKS', 'ABOUT US', 'LOCATIONS', 'CONTACT US'];
  searchList: Array<String> = ['DEALER', 'ALL YEARS', 'ALL COLORS', 'ALL MAKE'];

  constructor() { }

  ngOnInit() {
  }

}
