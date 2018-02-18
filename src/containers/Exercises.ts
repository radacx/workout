import { connect } from 'react-redux';
import { IAppState } from '../models/state/IAppState';
import { IExercisesDataProps } from '../components/Exercises';
import { Exercises as ExercisesComponent } from '../components/Exercises';
import * as React from 'react';

const mapStateToProps = (state: IAppState): IExercisesDataProps => {
  return {
    exercises: Object
      .keys(state.exercises)
      .map(key => state.exercises[key]),
  };
};


export const Exercises: React.ComponentClass = connect(
  mapStateToProps,
)(ExercisesComponent);
