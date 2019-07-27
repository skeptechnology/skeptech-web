import { NgModule } from "@angular/core";
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingMainComponent } from './main/landing-main.component';
import { DemosComponent } from './components/demos/demos.component';

const routes: Routes = [
  {
    path: "main",
    component: LandingMainComponent
  },
  {
    path: "blog-details",
    component: BlogDetailsPageComponent
  },
   {
    path: "demos",
    component: DemosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
