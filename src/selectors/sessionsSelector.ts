import { AppState } from '../models/state/AppState';

export const sessionsSelector = (state: AppState) =>
  state.sessions;
