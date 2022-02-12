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
    this.titleService.setTitle(environment.websiteShortName + " - About Emicalcu.in")
    this.seo.generateTags({description: "Emicalcu.in Contact, send feedback and suggestions ",
      title: "Emicalcu.in - About Emicalcu.in", slug: "about-emicalcu"})
  }

  ngOnInit(): void {
  }

}
