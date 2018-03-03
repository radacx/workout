import { IHomogenousObject } from '../../models/interfaces/IHomogenousObject';
import { ITrainingSession } from '../../models/interfaces/ITrainingSession';
import { AddTrainingSession } from '../../models/actions/actions';
import { assign } from '../../utils/assign';

type State = IHomogenousObject<ITrainingSession>;
type Actions = AddTrainingSession;

const initialState: State = {};

const addTrainingSession = (state: State, { payload: { session } }: AddTrainingSession): State =>
  assign(
    state,
    st => {
      st[session.id] = session;
      return st;
    }
  );

export const sessions = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'SESSION_ADDED':
      return addTrainingSession(state, action);

    default:
      return state;
  }
};
