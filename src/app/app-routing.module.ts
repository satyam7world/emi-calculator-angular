import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./comp/pages/home-page/home-page.component";
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component";
import {ContactFeedbackComponent} from "./pages/contact-feedback/contact-feedback.component";
import {TermsAndConditionsComponent} from "./pages/terms-and-conditions/terms-and-conditions.component";
import {DisclaimerComponent} from "./pages/disclaimer/disclaimer.component";
import {AboutUsComponent} from "./comp/pages/about-us/about-us.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  // {path: '/', component: HomePageComponent},
  // {path: ' ', component: HomePageComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'contactNfeedback', component: ContactFeedbackComponent},
  {path: 'tNc', component: TermsAndConditionsComponent},
  {path: 'disclaimer', component: DisclaimerComponent},
  {path: 'about-emicalcu', component: AboutUsComponent},
  // {path: '', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
