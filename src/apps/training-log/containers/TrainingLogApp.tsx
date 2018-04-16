import { ComponentClass } from 'react';
import { connect } from 'react-redux';
import {
  TrainingLogApp as TrainingLogAppComponent,
  TrainingLogAppCallbackProps,
} from '../components/TrainingLogApp';
import { TrainingSession } from '../../_types/data/TrainingSession';
import { addTrainingSession } from '../actions/actionCreators';
import { Dispatch } from '../../_types/actions/Dispatch';

const mapDispatchToProps = (dispatch: Dispatch): TrainingLogAppCallbackProps => ({
  addNewTrainingSession: (session: TrainingSession) =>
    dispatch(addTrainingSession(session)),
});

export const TrainingLogApp: ComponentClass = connect(
  undefined,
  mapDispatchToProps,
)(TrainingLogAppComponent);
