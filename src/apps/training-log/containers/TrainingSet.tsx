import { connect } from 'react-redux';
import {
  TrainingSet as TrainingSetComponent,
  TrainingSetCallbackProps,
  TrainingSetOwnProps,
} from '../components/TrainingSet';
import { TrainingSet as TrainingSetModel } from '../../_types/data/TrainingSet';
import { ComponentClass } from 'react';
import { addTrainingSet } from '../actions/thunkActionCreators';
import { Dispatch } from '../../_types/actions/Dispatch';

const mapDispatchToProps = (dispatch: Dispatch): TrainingSetCallbackProps => ({
  onAddSet: (trainingSet: TrainingSetModel) =>
    dispatch(addTrainingSet(trainingSet)),
});

export const TrainingSet: ComponentClass<TrainingSetOwnProps> = connect(
  undefined,
  mapDispatchToProps,
)(TrainingSetComponent);
