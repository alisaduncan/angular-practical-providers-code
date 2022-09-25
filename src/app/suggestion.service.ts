import { Injectable } from '@angular/core';
import { Drama, DRAMAS } from './dramas';
import { UserConfig } from './user-config';

export interface SuggestionService {
  getSuggestions(id: number): Drama[];
}

export function suggestedDramasFactory() {
  return (config: UserConfig) =>
    config.streamingService === 'myfavekdramas' ? new MyFaveKDramasSuggestionService() : new NetflixSuggestionService();
}

@Injectable({
  providedIn: 'root'
})
export class OriginalSuggestionService implements SuggestionService {
  public getSuggestions(id: number): Drama[] {
    return DRAMAS.filter(d => d.id !== id);
  }
}

@Injectable({
  providedIn: 'root'
})
export class MyFaveKDramasSuggestionService implements SuggestionService {
  public getSuggestions(id: number): Drama[] {
    return DRAMAS.filter(d => d.platform.includes('myfavekdramas') && d.id !== id);
  }
}

@Injectable({
  providedIn: 'root'
})
export class NetflixSuggestionService implements SuggestionService {

  public getSuggestions(id: number): Drama[] {
    return DRAMAS.filter(d => d.platform.includes('netflix') && d.id !== id);
  }
}
