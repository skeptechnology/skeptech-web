
import { ScrollToDirective } from './helpers/scrollTo.directives';
import { WINDOW_PROVIDERS } from './helpers/window.helpers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from "@ngu/carousel";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingRoutingModule } from './landing-routing.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesTwoComponent } from './components/features-two/features-two.component';
import { TeamComponent } from './components/team/team.component';
import { NewsTwoComponent } from './components/news-two/news-two.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroMainComponent } from './components/intro-main/intro-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';
import { LandingMainComponent} from './main/landing-main.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    NguCarouselModule,
    NgbModule,

    FormsModule
  ],
  declarations: [
    ContactFormComponent,
    FooterComponent,
    FeaturesTwoComponent,
    TeamComponent,
    NewsTwoComponent,
    HeaderComponent,
    ScrollToDirective,
    BlogDetailsComponent,
    BlogDetailsPageComponent,
    LandingMainComponent,
    IntroMainComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class LandingModule {}
