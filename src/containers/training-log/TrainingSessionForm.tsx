import {
  connect,
  Dispatch,
} from 'react-redux';
import { IAppState } from '../../models/state/IAppState';
import {
  updateTrainingSession,
} from '../../actions/index';
import {
  TrainingSessionForm as TrainingSessionComponent,
  TrainingSessionFormCallbackProps,
  TrainingSessionFormDataProps,
  TrainingSessionFormOwnProps,
} from '../../components/training-log/TrainingSessionForm';
import { ComponentClass } from 'react';
import { IUpdatedSession } from '../../models/interfaces/IUpdatedSession';

const mapStateToProps = (state: IAppState, { sessionId }: TrainingSessionFormOwnProps): TrainingSessionFormDataProps => {
  const { bodyweight, date } = state.sessions[sessionId];

  return {
    bodyweight,
    date,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): TrainingSessionFormCallbackProps => ({
  updateTrainingSession: (session: IUpdatedSession) =>
    dispatch(updateTrainingSession(session)),
});

export const TrainingSessionForm: ComponentClass<TrainingSessionFormOwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingSessionComponent);
