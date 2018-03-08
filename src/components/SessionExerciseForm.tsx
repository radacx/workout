import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { ComboBox } from './ComboBox';
import { IExercise } from '../models/interfaces/IExercise';
import { NavigationManager } from './screens/TrainingLog';
import { ISessionExercise } from '../models/interfaces/ITrainingSession';
import { Guid } from '../models/Guid';
import {
  WithZanorenie,
  Zanorenie,
} from '../models/interfaces/With';

export interface SessionExerciseFormDataProps {
  readonly zanorenie: Zanorenie;
  readonly exercises: IExercise[];
}

export interface SessionExerciseFormCallbackProps {
  readonly addExercise: (exerciseWith: WithZanorenie<ISessionExercise>) => void;
}

export interface SessionExerciseFormOwnProps {
  readonly sessionId: Guid;
}

type SessionExerciseFormProps = SessionExerciseFormDataProps & SessionExerciseFormCallbackProps & SessionExerciseFormOwnProps;

interface ISessionExerciseFormState {
  readonly selectedExercise: IExercise;
}

export class SessionExerciseForm extends React.PureComponent<SessionExerciseFormProps, ISessionExerciseFormState> {
  readonly state: ISessionExerciseFormState = {
    selectedExercise: this.props.exercises[0],
  };

  _exerciseChanged = (exercise: IExercise) =>
    this.setState({
      selectedExercise: exercise,
    });

  _getExerciseLabel = (exercise: IExercise) =>
    exercise.name;

  _submitExercise = () => {
    const sessionExercise: ISessionExercise = {
      id: new Date().getTime().toString(),
      sets: {},
      exercise: this.state.selectedExercise.id,
    };

    this.props.addExercise({
      item: sessionExercise,
      zanorenie: this.props.zanorenie,
    });
    NavigationManager.dismissModal();
  };

  render() {
    return (
      <View>
        <ComboBox
          items={this.props.exercises}
          onItemChange={this._exerciseChanged}
          getLabel={this._getExerciseLabel}
        />
        <Button
          title="Add exercise"
          onPress={this._submitExercise}
        />
      </View>
    );
  }
}
