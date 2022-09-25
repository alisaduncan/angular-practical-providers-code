import { Injectable } from '@angular/core';
import { Drama, DramaDetail, DRAMAS } from './dramas';

@Injectable({
  providedIn: 'root'
})
export class DramaService {

  constructor() { }

  public getDramas(): Drama[] {
    return DRAMAS.map(d => ({id: d.id, name: d.name, description: d.description, image: d.image, tags: d.tags}));
  }

  public getDrama(id: number): DramaDetail|undefined {
    return DRAMAS.find(d => d.id === id);
  }
}
