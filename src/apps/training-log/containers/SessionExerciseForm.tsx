import { connect } from 'react-redux';
import {
  SessionExerciseFormDataProps,
  SessionExerciseForm as SessionExerciseFormComponent,
  SessionExerciseFormCallbackProps,
} from '../components/SessionExerciseForm';
import { IStore } from '../../_shared/store/IStore';
import { ComponentClass } from 'react';
import { homogenousObjectToArray } from '../../_shared/utils/homogenousObjectToArray';
import { SessionExercise } from '../../_types/data/SessionExercise';
import { addSessionExercise } from '../actions/thunkActionCreators';
import { Dispatch } from '../../_types/actions/Dispatch';

const mapStateToProps = ({ exercisesApp }: IStore): SessionExerciseFormDataProps => ({
  exercises: homogenousObjectToArray(exercisesApp.exercises),
});

const mapDispatchToProps = (dispatch: Dispatch): SessionExerciseFormCallbackProps => ({
  addExercise: (exercise: SessionExercise) =>
    dispatch(addSessionExercise(exercise)),
});

export const SessionExerciseForm: ComponentClass = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionExerciseFormComponent);
