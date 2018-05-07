import PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from 'react-native';
import { ComboBox } from '../../_shared/components/ComboBox';
import { Exercise } from '../../_types/data/Exercise';
import { NavigationManager } from './TrainingLogApp';
import { SessionExercise } from '../../_types/data/SessionExercise';
import { createNewId } from '../../_shared/utils/createNewId';
import { Validation } from '../../_types/validation/Validation';

export type SessionExerciseFormDataProps = {
  readonly exercises: Exercise[];
};

export type SessionExerciseFormCallbackProps = {
  readonly addExercise: (exercise: SessionExercise) => void;
};

type Props = SessionExerciseFormDataProps
  & SessionExerciseFormCallbackProps;

type State = {
  readonly selectedExercise?: Exercise;
};

export class SessionExerciseForm extends React.PureComponent<Props, State> {
  static displayName = 'SessionExerciseForm';

  static propTypes: Validation<Props> = {
    addExercise: PropTypes.func.isRequired,
    exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  readonly state: State = {
    selectedExercise: undefined,
  };

  static getDerivedStateFromProps = ({ exercises }: Props): Partial<State> | null => ({
    selectedExercise: exercises[0],
  });

  _exerciseChanged = (selectedExercise: Exercise) =>
    this.setState({ selectedExercise });

  _getExerciseLabel = (exercise: Exercise) => exercise.name;

  _submitExercise = () => {
    if (this.state.selectedExercise) {
      const sessionExercise: SessionExercise = {
        id: createNewId(),
        sets: {},
        exerciseId: this.state.selectedExercise.id,
      };

      this.props.addExercise(sessionExercise);

      NavigationManager.dismissModal();
    }
  };

  render() {
    return (
      <>
        <ComboBox
          items={this.props.exercises}
          onItemChange={this._exerciseChanged}
          getLabel={this._getExerciseLabel}
        />

        <Button
          title="Add exercise"
          onPress={this._submitExercise}
          disabled={!this.state.selectedExercise}
        />
      </>
    );
  }
}
