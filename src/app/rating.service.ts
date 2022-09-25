import { Injectable } from '@angular/core';
import { DRAMAS } from './dramas';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  public getRatings(id: number): number {

    // initial version of rating service is a wrapper for proprietary rating system
    // that returns a whole number, out of a maximum 5
    const drama = DRAMAS.find(d => d.id === id);
    return drama ? Math.floor(drama?.rating) : 0;
  }
}


@Injectable({
  providedIn: 'root'
})
export class RatingPercentService {
  
  public getRatings(id: number): number {

    // gather values from multiple sources, and calculates a rating
    const drama = DRAMAS.find(d => d.id === id);
    return (drama ? drama?.rating : 0)/5;
  }
}
