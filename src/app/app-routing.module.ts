import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./comp/pages/home-page/home-page.component";
import {TestTempComponent} from "./comp/test-temp/test-temp.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  // {path: '/', component: HomePageComponent},
  // {path: ' ', component: HomePageComponent},
  {path: 'test', component: TestTempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
