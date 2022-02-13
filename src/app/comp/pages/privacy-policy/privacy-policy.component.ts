import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";
import {SeoService} from "../../../seo.service";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private titleService: Title, private seo: SeoService) {
    this.titleService.setTitle(environment.websiteShortName + " - Privacy Policy")
    this.seo.generateTags({
      description: "Emicalcu.in privacy policy ",
      title: "Emicalcu.in - Privacy Policy", slug: "privacy-policy"
    })
  }

  ngOnInit(): void {
  }

}
