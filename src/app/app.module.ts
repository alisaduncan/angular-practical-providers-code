import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DramasComponent } from './dramas/dramas.component';
import { DramaComponent } from './shared/drama.component';
import { DramaDetailComponent } from './drama/drama-detail.component';
import { SuggestedDramasComponent } from './drama/suggested-dramas.component';
import { VideoComponent } from './drama/video.component';
import { AboutComponent } from './about/about.component';
import { RatingService, RatingPercentService } from './rating.service';
import { DashboardService } from './dashboard.service';
import { DramaService } from './drama.service';

@NgModule({
  declarations: [
    AppComponent,
    DramasComponent,
    DramaComponent,
    DramaDetailComponent,
    SuggestedDramasComponent,
    VideoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: DashboardService, useExisting: DramaService },
    // { provide: RatingService, useClass: RatingPercentService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
