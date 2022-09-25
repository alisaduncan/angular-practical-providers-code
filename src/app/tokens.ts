import { InjectionToken } from '@angular/core';
import { Drama } from './dramas';
import { SuggestionService } from './suggestion.service';
import { userConfig, UserConfig } from './user-config';

export const SUGGESTED_DRAMAS_TOKEN = new InjectionToken<SuggestionService>('suggestionservice');

export const USER_CONFIG_TOKEN = new InjectionToken<UserConfig>('user.config', {
  providedIn: 'root',
  factory: () => userConfig
});

export const HEART_TOKEN = new InjectionToken<string>('heart', {
  factory: () => '❤️',
  providedIn: 'root'
});

export const CURRENTLY_WATCHING_TOKEN = new InjectionToken<Drama>('currentlywatching');
