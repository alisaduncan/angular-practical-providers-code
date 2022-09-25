import { Component, Inject, OnInit } from '@angular/core';
import { DramaService } from '../drama.service';
import { Drama } from '../dramas';
import { GiphyService } from '../giphy.service';
import { CURRENTLY_WATCHING_TOKEN, HEART_TOKEN } from '../tokens';

@Component({
  selector: 'app-about',
  template: `
    <h2 class="mb-12 text-center text-5xl text-indigo-600">About your go to K-Drama fan site</h2>
    <p class="text-center">
      We're so glad you're here! Thanks for supporting "{{about}}!" {{heart}}
    </p>
    <div class="my-12 w-screen mx-auto flex justify-evenly">
      <section>
        <p class="text-center text-lg mb-6">Laugh, cry, and fall in love with K-Dramas along with us!</p>
        <img class="rounded mx-auto h-72" src="{{giphyLink}}" />
      </section>
      <section>
        <p class="mb-6 text-center text-lg">What we're currently watching. ⬇️ How about you?</p>
        <div class="flex justify-center">
          <app-drama [drama]="currentlyWatching"></app-drama>
        </div>
      </section>
    </div>
    <p class="mt-12 text-center">
      Aren't providers so cool? Happy coding!
    </p>
  `,
  providers: [
    GiphyService,
    { provide: 'ABOUT', useValue: 'My Favorite K-Dramas'},
    { provide: CURRENTLY_WATCHING_TOKEN, useFactory: (d: DramaService) => d.getDrama(101), deps: [DramaService]  },
  ]
})
export class AboutComponent implements OnInit {
  public giphyLink!: string;

  constructor(
    private giphyService: GiphyService,
    @Inject('ABOUT') public about: string,
    @Inject(CURRENTLY_WATCHING_TOKEN) public currentlyWatching: Drama,
    @Inject(HEART_TOKEN) public heart: string,
    ) { }

  ngOnInit(): void {
    this.giphyLink = this.giphyService.imageLink;
  }

}
