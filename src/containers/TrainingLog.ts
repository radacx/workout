import { ComponentClass } from 'react';
import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  TrainingLog as TrainingLogComponent,
  TrainingLogCallbackProps,
} from '../components/screens/TrainingLog';
import { IAppState } from '../models/state/IAppState';
import { ITrainingSession } from '../models/interfaces/ITrainingSession';
import { addTrainingSession } from '../actions';

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): TrainingLogCallbackProps => ({
  addNewTrainingSession: (session: ITrainingSession) =>
    dispatch(addTrainingSession(session)),
});

export const TrainingLog: ComponentClass = connect(
  undefined,
  mapDispatchToProps,
)(TrainingLogComponent);
