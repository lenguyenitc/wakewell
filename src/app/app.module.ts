import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule,BsModalRef } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { SeriesComponent } from './series/series.component';
import { HeaderComponent } from './generate/header/header.component';
import { FooterComponent } from './generate/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ExperienceDetailComponent,
    SeriesComponent,
    HeaderComponent,
    FooterComponent,
  ],
  entryComponents: [
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [Title,BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
