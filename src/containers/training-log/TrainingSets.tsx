import { ComponentClass } from 'react';
import { connect } from 'react-redux';
import {
  TrainingSetsDataProps,
  TrainingSets as TrainingSetsComponent,
} from '../../components/training-log/TrainingSets';
import { AppState } from '../../models/state/AppState';
import { Guid } from '../../models/Guid';
import { homogenousObjectToArray } from '../../utils/homogenousObjectToArray';

type Props = Readonly<{
  exerciseId: Guid;
}>;

const mapStateToProps = (
  state: AppState,
  { exerciseId }: Props,
): TrainingSetsDataProps => {
  const exercise = state.sessions[ state.formIds.session ].exercises[ exerciseId ];
  const exerciseType = state.exercises[ exercise.exercise ].exerciseType;

  return {
    sets: homogenousObjectToArray(exercise.sets),
    exerciseType,
  };
};

export const TrainingSets: ComponentClass<Props> = connect(
  mapStateToProps,
)(TrainingSetsComponent);
