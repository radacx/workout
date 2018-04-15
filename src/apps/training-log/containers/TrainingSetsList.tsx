import { connect } from 'react-redux';
import {
  TrainingSetsListOwnProps,
  TrainingSetsList as TrainingSetsListComponent,
  TrainingSetsListCallbackProps,
} from '../components/TrainingSetsList';
import { ComponentClass } from 'react';
import { Uuid } from '../../_types/Uuid';
import { setExerciseId } from '../actions/actionCreators';
import { Dispatch } from '../../_types/actions/Dispatch';

const mapDispatchToProps = (dispatch: Dispatch): TrainingSetsListCallbackProps => ({
  setExerciseId: (id: Uuid) =>
    dispatch(setExerciseId(id)),
});

export const TrainingSetsList: ComponentClass<TrainingSetsListOwnProps> = connect(
  undefined,
  mapDispatchToProps,
)(TrainingSetsListComponent);
