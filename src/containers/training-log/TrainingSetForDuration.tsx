import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  TrainingSetForDuration as TrainingSetForDurationComponent,
  TrainingSetForDurationCallbackProps,
} from '../../components/training-log/TrainingSetForDuration';
import { IAppState } from '../../models/state/IAppState';
import { TrainingSet } from '../../models/TrainingSet';
import { ComponentClass } from 'react';
import { addTrainingSetAsync } from '../../actions/thunk/index';

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): TrainingSetForDurationCallbackProps => ({
  onAddSet: (trainingSet: TrainingSet) =>
    dispatch(addTrainingSetAsync(trainingSet)),
});

export const TrainingSetForDuration: ComponentClass = connect(
  undefined,
  mapDispatchToProps,
)(TrainingSetForDurationComponent);
