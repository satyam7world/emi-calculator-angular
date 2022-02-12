import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment";
import {SeoService} from "../../seo.service";

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  constructor(private titleService: Title, private seo: SeoService) {
    this.titleService.setTitle(environment.websiteShortName + " - Disclaimer")
    this.seo.generateTags({
      description: "Emicalcu.in Disclaimer By using our website, you hereby consent to our disclaimer and agree to its terms. ",
      title: "Emicalcu.in - Disclaimer", slug: "disclaimer"
    })
  }

  ngOnInit(): void {
  }

}
