import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menuFooter: Array<string> = ['HOME', 'CONTACT US', 'SELLER FAQS' , 'BUYER FAQS', 'SEARCH INVENTORY'];

  constructor() { }

  ngOnInit() {
  }

}
