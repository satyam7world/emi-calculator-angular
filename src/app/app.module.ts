import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './comp/pages/home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from './comp/common/navbar/navbar.component';
import {FooterDfComponent} from './comp/common/footer-df/footer-df.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { PrivacyPolicyComponent } from './comp/pages/privacy-policy/privacy-policy.component';
import { ContactFeedbackComponent } from './comp/pages/contact-feedback/contact-feedback.component';
import { TermsAndConditionsComponent } from './comp/pages/terms-and-conditions/terms-and-conditions.component';
import { DisclaimerComponent } from './comp/pages/disclaimer/disclaimer.component';
import { AboutUsComponent } from './comp/pages/about-us/about-us.component';
import { NotFoundComponent } from './comp/pages/not-found/not-found.component';
import { SeoHomePageArticleComponent } from './comp/otros/seo-home-page-article/seo-home-page-article.component';

// todo : In angular.json add .min. to everyone

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterDfComponent,
    PrivacyPolicyComponent,
    ContactFeedbackComponent,
    TermsAndConditionsComponent,
    DisclaimerComponent,
    AboutUsComponent,
    NotFoundComponent,
    SeoHomePageArticleComponent,

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
