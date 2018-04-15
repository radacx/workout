import { connect } from 'react-redux';
import {
  SessionExercisesList as SessionExercisesListComponent,
  SessionExercisesListDataProps,
  SessionExercisesListOwnProps,
} from '../components/SessionExercisesList';
import { ComponentClass } from 'react';
import { IStore } from '../../_shared/store/IStore';
import { homogenousObjectToArray } from '../../_shared/utils/homogenousObjectToArray';

const mapStateToProps = ({ trainingLogApp }: IStore, { sessionId }: SessionExercisesListOwnProps): SessionExercisesListDataProps => ({
  exercises: homogenousObjectToArray(trainingLogApp.sessions[sessionId].exercises),
});

export const SessionExercisesList: ComponentClass<SessionExercisesListOwnProps> = connect(
  mapStateToProps)(
  SessionExercisesListComponent);
