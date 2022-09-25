import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DramasComponent } from './dramas/dramas.component';
import { DramaDetailComponent } from './drama/drama-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'dramas', component: DramasComponent },
  { path: 'dramas/:id', component: DramaDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: DramasComponent },
  { path: '**', redirectTo: '/dramas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
