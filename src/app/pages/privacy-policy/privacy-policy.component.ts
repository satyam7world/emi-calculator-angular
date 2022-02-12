import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private titleService : Title) {
    this.titleService.setTitle(environment.websiteShortName + " - Privacy Policy")
  }

  ngOnInit(): void {
  }

}
