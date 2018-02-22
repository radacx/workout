import { connect } from 'react-redux';
import { IAppState } from '../models/state/IAppState';
import { IExercisesDataProps } from '../components/Exercises';
import { Exercises as ExercisesComponent } from '../components/Exercises';
import * as React from 'react';

const mapStateToProps = (state: IAppState): IExercisesDataProps => ({
  exerciseIds: Object
    .keys(state.exercises),
});

export const Exercises: React.ComponentClass = connect(
  mapStateToProps,
)(ExercisesComponent);
