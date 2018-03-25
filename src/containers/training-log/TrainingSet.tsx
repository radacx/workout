import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  TrainingSet as TrainingSetComponent,
  TrainingSetCallbackProps,
  TrainingSetOwnProps,
} from '../../components/training-log/TrainingSet';
import { AppState } from '../../models/state/AppState';
import { TrainingSet as TrainingSetModel } from '../../models/data/TrainingSet';
import { ComponentClass } from 'react';
import { addTrainingSet } from '../../actions/thunkActionCreators';

const mapDispatchToProps = (dispatch: Dispatch<AppState>): TrainingSetCallbackProps => ({
  onAddSet: (trainingSet: TrainingSetModel) =>
    dispatch(addTrainingSet(trainingSet)),
});

export const TrainingSet: ComponentClass<TrainingSetOwnProps> = connect(
  undefined,
  mapDispatchToProps,
)(TrainingSetComponent);
