import PropTypes from 'prop-types';
import { ComponentClass } from 'react';
import { connect } from 'react-redux';
import {
  TrainingSetsDataProps,
  TrainingSets as TrainingSetsComponent,
} from '../components/TrainingSets';
import { IStore } from '../../_shared/store/IStore';
import { Uuid } from '../../_types/Uuid';
import { homogenousObjectToArray } from '../../_shared/utils/homogenousObjectToArray';
import { Validation } from '../../_types/validation/Validation';

type Props = {
  readonly exerciseId: Uuid;
};

const propTypes: Validation<Props> = {
  exerciseId: PropTypes.string.isRequired,
};

const mapStateToProps = ({ trainingLogApp, exercisesApp }: IStore, { exerciseId }: Props): TrainingSetsDataProps => {
  const sessions = trainingLogApp.sessions;
  const sessionId = trainingLogApp.formIds.session;
  const exercise = sessions[sessionId].exercises[exerciseId];
  const exerciseType = exercisesApp.exercises[exercise.exerciseId].exerciseType;

  return {
    sets: homogenousObjectToArray(exercise.sets),
    exerciseType,
  };
};

const TrainingSets: ComponentClass<Props> = connect(mapStateToProps)(
  TrainingSetsComponent);

TrainingSets.propTypes = propTypes;

export { TrainingSets };
