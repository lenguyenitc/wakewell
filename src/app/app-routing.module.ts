import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  { 
    path: 'experience', 
    component: ExperienceComponent,
    data : {
      name: 'experience',
      title: 'Experience'  
    }  
  },
  { 
    path: 'experience-detail', 
    component: ExperienceDetailComponent,
    data : {  
      name: 'experience-detail',
      title: 'Experience Detail'  
    }
  },
  { 
    path: 'series', 
    component: SeriesComponent,
    data : {  
      name: 'series',
      title: 'Series'  
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
