import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./comp/pages/home-page/home-page.component";
import {PrivacyPolicyComponent} from "./comp/pages/privacy-policy/privacy-policy.component";
import {ContactFeedbackComponent} from "./comp/pages/contact-feedback/contact-feedback.component";
import {TermsAndConditionsComponent} from "./comp/pages/terms-and-conditions/terms-and-conditions.component";
import {DisclaimerComponent} from "./comp/pages/disclaimer/disclaimer.component";
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
  // https://stackoverflow.com/a/36261194/11815154
  // {path: '404', component: NotFoundComponent},
  // {path: '**', redirectTo: '/404'},

  {path: '**', redirectTo: ''}, // Fix white page when no route available

  // {path: '', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
