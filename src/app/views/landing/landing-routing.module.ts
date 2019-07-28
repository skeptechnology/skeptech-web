import { NgModule } from "@angular/core";
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingMainComponent } from './main/landing-main.component';

const routes: Routes = [
  {
    path: "main",
    component: LandingMainComponent
  },
  {
    path: "blog-details",
    component: BlogDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
