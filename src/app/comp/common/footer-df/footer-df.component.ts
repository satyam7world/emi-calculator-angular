import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-footer-df',
  templateUrl: './footer-df.component.html',
  styleUrls: ['./footer-df.component.css']
})
export class FooterDfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  environment = environment


  currentYearLong(): number {
    return new Date().getFullYear();
  }

}
