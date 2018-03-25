import { connect } from 'react-redux';
import {
  SessionExercisesList as SessionExercisesListComponent,
  SessionExercisesListDataProps,
  SessionExercisesListOwnProps,
} from '../../components/training-log/SessionExercisesList';
import { ComponentClass } from 'react';
import { AppState } from '../../models/state/AppState';

const mapStateToProps = (
  state: AppState,
  { sessionId }: SessionExercisesListOwnProps,
): SessionExercisesListDataProps => ({
  exercises: state.sessions[ sessionId ].exercises,
});

export const SessionExercisesList: ComponentClass<SessionExercisesListOwnProps> = connect(
  mapStateToProps,
)(SessionExercisesListComponent);
