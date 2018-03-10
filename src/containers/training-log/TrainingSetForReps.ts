import {
  connect,
  Dispatch,
} from 'react-redux';
import { IAppState } from '../../models/state/IAppState';
import { TrainingSet } from '../../models/TrainingSet';
import { ComponentClass } from 'react';
import {
  ITrainingSetForDurationCallbackProps,
  TrainingSetForReps as TrainingSetForRepsComponent,
} from '../../components/training-log/TrainingSetForReps';
import { addTrainingSetAsync } from '../../actions/thunk/index';

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): ITrainingSetForDurationCallbackProps => ({
  onAddSet: (trainingSet: TrainingSet) =>
    dispatch(addTrainingSetAsync(trainingSet)),
});

export const TrainingSetForReps: ComponentClass = connect(
  undefined,
  mapDispatchToProps,
)(TrainingSetForRepsComponent);
