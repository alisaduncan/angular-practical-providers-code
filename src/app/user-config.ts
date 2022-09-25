import { STREAMING_PLATFORM } from './dramas';

export interface UserConfig {
  streamingService: STREAMING_PLATFORM;
}

export const userConfig: UserConfig = {
  streamingService: 'myfavekdramas'
};

