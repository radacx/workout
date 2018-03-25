import {
  connect,
  Dispatch,
} from 'react-redux';
import { AppState } from '../../models/state/AppState';
import {
  TrainingSessionForm as TrainingSessionComponent,
  TrainingSessionFormCallbackProps,
  TrainingSessionFormDataProps,
  TrainingSessionFormOwnProps,
} from '../../components/training-log/TrainingSessionForm';
import { ComponentClass } from 'react';
import { UpdatedSession } from '../../models/data/UpdatedSession';
import { updateTrainingSession } from '../../actions/actionCreators';

const mapStateToProps = (
  state: AppState,
  { sessionId }: TrainingSessionFormOwnProps,
): TrainingSessionFormDataProps => {
  const { bodyweight, date } = state.sessions[ sessionId ];

  return {
    bodyweight,
    date,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>): TrainingSessionFormCallbackProps => ({
  updateTrainingSession: (session: UpdatedSession) =>
    dispatch(updateTrainingSession(session)),
});

export const TrainingSessionForm: ComponentClass<TrainingSessionFormOwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingSessionComponent);
