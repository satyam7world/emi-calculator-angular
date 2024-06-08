import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {

  }

  environment = environment

  navLinks = [
    {routerLinkPath: '/', nameX: 'Home'},
    {routerLinkPath: '/privacy-policy', nameX: 'Privacy Policy'},
    // '/' is not require but adding this will tell not to append the existing path , but open from root url
    {routerLinkPath: '/contact', nameX: 'Contact & Feedback'},
    {routerLinkPath: '/disclaimer', nameX: 'Disclaimer'},
    {routerLinkPath: '/terms', nameX: 'Terms & Conditions'},
    // {routerLinkPath: '/about-emicalc', nameX: 'About Emicalc.in'},
    // {routerLinkPath: '', nameX: ''},
  ]


  ngOnInit(): void {
  }

}
