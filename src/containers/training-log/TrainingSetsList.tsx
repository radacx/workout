import {
  connect,
  Dispatch,
} from 'react-redux';
import {
  ITrainingSetsListOwnProps,
  TrainingSetsList as TrainingSetsListComponent,
  TrainingSetsListCallbackProps,
} from '../../components/training-log/TrainingSetsList';
import { ComponentClass } from 'react';
import { IAppState } from '../../models/state/IAppState';
import { Guid } from '../../models/Guid';
import { setExerciseId } from '../../actions/index';

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): TrainingSetsListCallbackProps => ({
  setExerciseId: (id: Guid) =>
    dispatch(setExerciseId(id)),
});

export const TrainingSetsList: ComponentClass<ITrainingSetsListOwnProps> = connect(
  undefined,
  mapDispatchToProps,
)(TrainingSetsListComponent);
