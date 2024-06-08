import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";
import {SeoService} from "../../../seo.service";

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {

  constructor(private titleService : Title, private seo : SeoService) {
    this.titleService.setTitle(environment.websiteShortName + " - Terms & Conditions")
    this.seo.generateTags({
      description: "EMI calculator Terms and Condition",
      title: "EMI calculator - Terms and Condition", slug: "terms"
    })
  }

  ngOnInit(): void {
  }

}
