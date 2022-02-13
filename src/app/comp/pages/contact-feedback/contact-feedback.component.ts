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
    this.titleService.setTitle(environment.websiteShortName + " - Contact Emicalcu.in")
    this.seo.generateTags({
      description: "Emicalcu.in contact Emicalcu.in",
      title: "Emicalcu.in - Contact Emicalcu.in", slug: "contactNfeedback"
    })
  }

  ngOnInit(): void {
  }

}
