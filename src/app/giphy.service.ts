import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private readonly GIPHYS: string[] = [
    'https://media.giphy.com/media/3owzWbasbe1KiOIAko/giphy.gif',
    'https://media.giphy.com/media/mUKsLiAqCRPfDlgW4R/giphy-downsized-large.gif',
    'https://media.giphy.com/media/PUcBZXV6I6yHWdYrTP/giphy.gif'
  ]
  public imageLink: string;

  constructor() {
    this.imageLink = this.GIPHYS[Math.floor(Math.random() * this.GIPHYS.length)];
   }
}
