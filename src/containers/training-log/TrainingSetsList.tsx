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
import { AppState } from '../../models/state/AppState';
import { Guid } from '../../models/Guid';
import { setExerciseId } from '../../actions/actionCreators';

const mapDispatchToProps = (dispatch: Dispatch<AppState>): TrainingSetsListCallbackProps => ({
  setExerciseId: (id: Guid) =>
    dispatch(setExerciseId(id)),
});

export const TrainingSetsList: ComponentClass<ITrainingSetsListOwnProps> = connect(
  undefined,
  mapDispatchToProps,
)(TrainingSetsListComponent);
