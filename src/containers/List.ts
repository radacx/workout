import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  IListCallbackProps,
  List as ListComponent,
} from '../components/List';
import {
  addExerciseAsync,
  updateExerciseAsync,
} from '../actions/thunk';
import { IAppState } from '../models/state/IAppState';
import { IExerciseSchemaProps } from '../models/classes/Exercise';

const forSchema = (): IExerciseSchemaProps => ({
  id: Date.now().toString(10),
  name: Date.now().toString(10),
  planesOfMovement: [],
  primaryMuscleGroups: [],
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): IListCallbackProps => ({
  addExercise: () => dispatch(
    addExerciseAsync(forSchema())),
  updateExercise: () => dispatch(
    updateExerciseAsync(forSchema())),
});

export const List: React.ComponentClass = connect(
  undefined,
  mapDispatchToProps,
)(ListComponent);
