import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DramaService } from '../drama.service';
import { Drama, STREAMING_PLATFORM } from '../dramas';
import { HEART_TOKEN, USER_CONFIG_TOKEN } from '../tokens';
import { UserConfig } from '../user-config';

@Component({
  selector: 'app-dramas',
  template: `
    <section class="mx-auto">
    <!-- <div class="w-56 flex flex-col text-sm">
      <label class="text-sm" for="streaming">Select streaming:</label>
      <select #streamingEl class="rounded bg-slate-200" id="streaming" (change)="onStreamingSelected($event.target)">
        <option value="myfavekdramas">My Favorite K-Dramas</option>
        <option value="netflix">Netflix</option>
      </select>
    </div> -->
      <p class="text-center text-3xl mb-12 text-indigo-500">Transport yourself to another world {{heart}}</p>
      <div class="flex flex-wrap gap-4">
        <app-drama *ngFor="let d of dramas" [drama]="d"></app-drama>
      </div>
    </section>
    <section>
      <p></p>
    </section>
    <section class="w-10/12 mx-auto mt-24">
      <h4  class="text-center text-xl mt-12 mb-3 text-slate-400">Credits</h4>
      <p class="text-sm flex justify-center text-slate-500">All images are official promotional posters.</p>
    </section>
  `,
  providers: [
    { provide: HEART_TOKEN, useValue: '💖🫰'}
  ]
})
export class DramasComponent implements OnInit, AfterViewInit {
  public dramas!: Drama[];
  @ViewChild('streamingEl') public streamingEl!: ElementRef;

  constructor(private dramaService: DramaService,
    @Inject(HEART_TOKEN) public heart: string,
    @Inject(USER_CONFIG_TOKEN) private userConfig: UserConfig) { }

  ngOnInit(): void {
    this.dramas = this.dramaService.getDramas();
  }

  public ngAfterViewInit(): void {
    this.streamingEl.nativeElement.value = this.userConfig.streamingService;
  }

  public onStreamingSelected(event: EventTarget | null): void {
    const inputElement = event as HTMLInputElement;
    this.userConfig.streamingService = inputElement?.value as STREAMING_PLATFORM;
  }

}
