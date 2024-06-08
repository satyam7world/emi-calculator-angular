import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";
import {SeoService} from "../../../seo.service";

@Component({
  selector: 'app-contact-feedback',
  templateUrl: './contact-feedback.component.html',
  styleUrls: ['./contact-feedback.component.css']
})
export class ContactFeedbackComponent implements OnInit {

  constructor(private titleService : Title, private seo : SeoService) {
    this.titleService.setTitle(environment.websiteShortName + " - Contact EMI calculator")
    this.seo.generateTags({
      description: "EMI calculator contact EMI calculator",
      title: "EMI calculator - Contact EMI calculator", slug: "contact"
    })
  }

  ngOnInit(): void {
  }

}
