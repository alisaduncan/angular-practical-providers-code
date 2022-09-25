import { Drama } from './dramas';

export abstract class DashboardService {
  abstract getDramas: () => [];
}

