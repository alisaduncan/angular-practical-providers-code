import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DramaService } from '../drama.service';
import { Drama, DramaDetail } from '../dramas';
import { RatingService } from '../rating.service';
import { suggestedDramasFactory, SuggestionService } from '../suggestion.service';
import { SUGGESTED_DRAMAS_TOKEN, USER_CONFIG_TOKEN } from '../tokens';
import { UserConfig } from '../user-config';

@Component({
  selector: 'app-drama-detail',
  template: `
  <h2 class="mb-12 text-center text-5xl text-indigo-600">
      {{drama.name}}
    </h2>
    <section class="flex justify-center">
      <img class="w-80 rounded" src="{{drama.image}}"/>
      <div class="ml-8 w-2/5 text-slate-600">
        <p class="text-lg">{{drama.description}}</p>
        <!-- <p class="my-6">It's a hit! {{rating | percent}} of K-Drama fans love this!</p> -->
        <p class="my-6">It's a hit! Rates {{rating}} out of 5!</p>
        <p>Released in {{drama.release}}</p>
        <p class="my-6">
          Starring
          <span *ngFor="let actor of drama.cast; last as last">
            {{actor}}<span *ngIf="!last">,</span>
          </span>
        </p>
        <div class="my-6 flex">
          <p class="mr-3 px-1.5 py-1 ring-1 ring-purple-300 bg-purple-100 rounded text-slate-700 text-sm" *ngFor="let t of drama.tags">
            {{t}}
          </p>
        </div>
      </div>
    </section>
    <div class="w-10/12 my-12 flex justify-evenly">
      <section>
        <h3 class="text-center text-3xl text-indigo-600">Official Trailer</h3>
        <div class="mt-3">
          <app-video [videoId]="drama.videoId"></app-video>
        </div>
      </section>
      <section>
        <!-- <h3 class="text-xl ml-6 text-indigo-400 mb-9">
          If you enjoyed {{drama.name}}, consider watching these dramas on
          <span> {{streaming === 'myfavekdramas' ? 'My Favorite K-Dramas' : 'Netflix'}} </span>
        </h3> -->
        <h3 class="text-xl ml-6 text-indigo-400 mb-9">
          If you enjoyed {{drama.name}}, consider watching
        </h3>
        <app-suggested-dramas [dramas]="suggestedDramas"></app-suggested-dramas>
      </section>
    </div>
    <!-- <section class="w-10/12 mx-auto">
      <h3 class="text-center text-3xl mt-12 mb-9 text-indigo-600">What people say about {{drama.name}}</h3>
      <app-add-comment></app-add-comment>
      <div class="border border-slate-300 my-6"></div>

      <app-comments [comments]="drama.comments"></app-comments>
    </section> -->
    <section class="w-10/12 mx-auto">
      <h4  class="text-center text-xl mt-12 mb-3 text-slate-500">Credits</h4>
      <p class="text-sm flex justify-center text-slate-600">All images are promotional posters and all videos are official trailer releases.</p>
    </section>
  `,
  providers: [
    { provide: SUGGESTED_DRAMAS_TOKEN, useFactory: suggestedDramasFactory(), deps: [USER_CONFIG_TOKEN] }
  ]
})
export class DramaDetailComponent implements OnInit {
  public drama!: DramaDetail;
  public rating = 0;
  public suggestedDramas: Drama[] = [];
  public streaming = this.userConfig.streamingService

  constructor(
    private activatedRoute: ActivatedRoute,
    private dramaService: DramaService,
    private ratingService: RatingService,
    @Inject(SUGGESTED_DRAMAS_TOKEN) private suggestionService: SuggestionService,
    @Inject(USER_CONFIG_TOKEN) private userConfig: UserConfig
  ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.drama = this.dramaService.getDrama(id) as DramaDetail;
    this.rating = this.ratingService.getRatings(id);
    this.suggestedDramas = this.suggestionService.getSuggestions(id);
  }
}
