import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './comp/pages/home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from './comp/common/navbar/navbar.component';
import {FooterDfComponent} from './comp/common/footer-df/footer-df.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { TestTempComponent } from './comp/test-temp/test-temp.component';

// todo : In angular.json add .min. to everyone

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterDfComponent,
    TestTempComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
