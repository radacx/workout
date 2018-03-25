import { ComponentClass } from 'react';
import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  TrainingLog as TrainingLogComponent,
  TrainingLogCallbackProps,
} from '../../components/training-log/TrainingLog';
import { AppState } from '../../models/state/AppState';
import { TrainingSession } from '../../models/data/TrainingSession';
import { addTrainingSession } from '../../actions/actionCreators';

const mapDispatchToProps = (dispatch: Dispatch<AppState>): TrainingLogCallbackProps => ({
  addNewTrainingSession: (session: TrainingSession) =>
    dispatch(addTrainingSession(session)),
});

export const TrainingLog: ComponentClass = connect(
  undefined,
  mapDispatchToProps,
)(TrainingLogComponent);
