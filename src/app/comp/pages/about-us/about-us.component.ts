import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";
import {SeoService} from "../../../seo.service";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private titleService: Title, private seo: SeoService) {
    this.titleService.setTitle(environment.websiteShortName + " - About EMI calculator")
    this.seo.generateTags({description: "EMI calculator Contact, send feedback and suggestions ",
      title: "EmiCalculator - About", slug: "about"})
  }

  ngOnInit(): void {
  }

}
