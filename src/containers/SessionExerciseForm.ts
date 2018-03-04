import { connect } from 'react-redux';
import {
  ISessionExerciseFormDataProps,
  ISessionExerciseFormOwnProps,
  SessionExerciseForm as SessionExerciseFormComponent,
} from '../components/SessionExerciseForm';
import { IAppState } from '../models/state/IAppState';
import { ComponentClass } from 'react';
import { homogenousObjectToArray } from '../utils/homogenousObjectToArray';

const mapStateToProps = (state: IAppState): ISessionExerciseFormDataProps => ({
  exercises: homogenousObjectToArray(state.exercises),
});

export const SessionExerciseForm: ComponentClass<ISessionExerciseFormOwnProps> = connect(
  mapStateToProps,
)(SessionExerciseFormComponent);
