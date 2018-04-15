import {
  assign,
  assignWithGet,
} from '../../../_shared/utils/assign';
import {
  TrainingLog_AddSession,
  TrainingLog_DeleteSession,
  TrainingLog_AddSessionExercise,
  TrainingLog_RemoveSessionExercise,
  TrainingLog_UpdateSessionExercise,
  TrainingLog_UpdateSession,
  TrainingLog_AddTrainingSet,
  TrainingLog_RemoveTrainingSet,
  TrainingLog_UpdateTrainingSet,
} from '../../constants/actionTypes';
import * as actions from '../../actions/actionCreators';
import { initialTrainingLogAppStoreState } from '../../store/initialTrainingLogAppStoreState';
import { TrainingLogAction } from '../../_types/TrainingLogAction';

type State = typeof initialTrainingLogAppStoreState.sessions;

const addTrainingSession = (state: State, { payload: { session } }: ReturnType<typeof actions.addTrainingSession>,
): State => assign(
  state,
  st => ({
    ...st,
    [session.id]: session,
  }),
);

const removeTrainingSession = (state: State, { payload: { id } }: ReturnType<typeof actions.removeTrainingSession>,
): State => assign(
  state,
  st => {
    const temp = { ...st };
    delete temp[id];
    return temp;
  },
);

const updateTrainingSession = (state: State, { payload: { session } }: ReturnType<typeof actions.updateTrainingSession>,
): State => assignWithGet(
  state,
  st => st[session.id],
  sess => ({
    ...sess,
    bodyweight: session.bodyweight,
    date: session.date,
  }),
);

const removeSessionExercise = (state: State, { payload: { id, formIds } }: ReturnType<typeof actions.removeSessionExercise>,
): State => assignWithGet(
  state,
  st => st[formIds.session].exercises,
  exs => {
    delete exs[id];
    return exs;
  },
);

const updateSessionExercise = (state: State, { payload: { formIds, sessionExercise } }: ReturnType<typeof actions.updateSessionExercise>,
): State => assignWithGet(
  state,
  st => st[formIds.session].exercises,
  exs => {
    exs[sessionExercise.id] = sessionExercise;

    return exs;
  },
);

const addSessionExercise = (state: State, { payload: { sessionExercise, formIds } }: ReturnType<typeof actions.addSessionExercise>,
): State => assignWithGet(
  state,
  st => st[formIds.session].exercises,
  exercises => {
    exercises[sessionExercise.id] = sessionExercise;

    return exercises;
  },
);

const removeTrainingSet = (state: State, { payload: { id, formIds } }: ReturnType<typeof actions.removeTrainingSet>,
): State => assignWithGet(
  state,
  st => st[formIds.session].exercises[formIds.exercise].sets,
  sts => {
    delete sts[id];
    return sts;
  },
);

const updateTrainingSet = (state: State, { payload: { formIds, trainingSet } }: ReturnType<typeof actions.updateTrainingSet>,
): State => assignWithGet(
  state,
  st => st[formIds.session].exercises[formIds.exercise],
  ex => {
    ex.sets[trainingSet.id] = trainingSet;
    return ex;
  },
);

const addTrainingSet = (state: State, { payload: { trainingSet, formIds } }: ReturnType<typeof actions.addTrainingSet>,
): State => assignWithGet(
  state,
  st => st[formIds.session].exercises[formIds.exercise].sets,
  sets => {
    sets[trainingSet.id] = trainingSet;
    return sets;
  },
);

export const sessions = (state = initialTrainingLogAppStoreState.sessions, action: TrainingLogAction): State => {
  switch (action.type) {
    case TrainingLog_AddSession: {
      return addTrainingSession(state, action);
    }
    case TrainingLog_UpdateSession: {
      return updateTrainingSession(state, action);
    }
    case TrainingLog_DeleteSession: {
      return removeTrainingSession(state, action);
    }

    case TrainingLog_AddSessionExercise: {
      return addSessionExercise(state, action);
    }
    case TrainingLog_UpdateSessionExercise: {
      return updateSessionExercise(state, action);
    }
    case TrainingLog_RemoveSessionExercise: {
      return removeSessionExercise(state, action);
    }

    case TrainingLog_AddTrainingSet: {
      return addTrainingSet(state, action);
    }
    case TrainingLog_UpdateTrainingSet: {
      return updateTrainingSet(state, action);
    }
    case TrainingLog_RemoveTrainingSet: {
      return removeTrainingSet(state, action);
    }

    default:
      return state;
  }
};
