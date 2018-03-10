import {
  View,
  Button,
  Text,
  TextInput,
  Slider,
} from 'react-native';
import React from 'react';
const RadioForm = require('react-native-simple-radio-button').default;
import { MuscleGroup } from '../../models/enums/MuscleGroup';
import { MovementPlane } from '../../models/enums/MovementPlane';
import { createNewId } from '../../utils/createNewId';
import { ExerciseType } from '../../models/enums/ExerciseType';
import { NavigationManager } from './ExercisesList';
import { createNavigationProps } from '../../utils/createNavigationProps';
import { componentsWithNavigationProps } from '../../utils/componentsWithNavigationProps';
import { Exercise } from '../../models/Exercise';
import { CheckBox } from 'react-native-elements';
import { NumericInput } from '../NumericInput';

export interface INewExerciseFormCallbackProps {
  addExercise: (exercise: Exercise) => void;
}

interface State {
  readonly primaryMuscleGroups: MuscleGroup[];
  readonly secondaryMuscleGroups: MuscleGroup[];
  readonly planesOfMovement: MovementPlane[];
  readonly exerciseType: ExerciseType;
  readonly name: string;
  readonly isBodyweight: boolean;
  readonly relativeBodyweight: number;
}

const radioProps = [
  {
    label: ExerciseType.Reps,
    value: ExerciseType.Reps,
  },
  {
    label: ExerciseType.Duration,
    value: ExerciseType.Duration,
  },
];

const muscleGroups = Object
  .keys(MuscleGroup)
  .map((k: any) => MuscleGroup[ k ]);

const movementPlanes = Object
  .keys(MovementPlane)
  .map((k: any) => MovementPlane[ k ]);

export class NewExerciseForm extends React.PureComponent<INewExerciseFormCallbackProps, State> {
  static displayName = 'NewExerciseForm';

  state: State = {
    exerciseType: radioProps[0].value,
    name: '',
    planesOfMovement: [],
    primaryMuscleGroups: [],
    secondaryMuscleGroups: [],
    isBodyweight: false,
    relativeBodyweight: 0,
  };

  _addExercise = () => {
    const id = createNewId();
    const { isBodyweight, relativeBodyweight, ...exerciseBase } = this.state;

    const exercise = isBodyweight ?
      {
        ...exerciseBase,
        id,
        relativeBodyweight,
      } :
      {
        ...exerciseBase,
        id,
      };

    this.props.addExercise(exercise);

    NavigationManager.pop();
  };

  _nameChanged = (name: string) =>
    this.setState({
      name,
    });

  _exerciseTypeChanged = (exerciseType: ExerciseType) =>
    this.setState({
      exerciseType,
    });

  _primaryMuscleGroupsChanged = (primaryMuscleGroups: MuscleGroup[]) =>
    this.setState({
      primaryMuscleGroups,
    });

  _navigateToPrimaryMuscleGroups = () =>
    this._navigateToMultiSelectedWithCallback(
      muscleGroups,
      this._primaryMuscleGroupsChanged,
    );

  _secondaryMuscleGroupsChanged = (secondaryMuscleGroups: MuscleGroup[]) =>
    this.setState({
      secondaryMuscleGroups,
    });

  _navigateToSecondaryMuscleGroups = () =>
    this._navigateToMultiSelectedWithCallback(
      muscleGroups,
      this._secondaryMuscleGroupsChanged,
    );

  _planesOfMovementChanged = (planesOfMovement: MovementPlane[]) =>
    this.setState({
      planesOfMovement,
    });

  _navigateToPlanesOfMovement = () =>
    this._navigateToMultiSelectedWithCallback(
      movementPlanes,
      this._planesOfMovementChanged,
    );

  _navigateToMultiSelectedWithCallback = <T extends any>(options: T[], callback: (results: T[]) => void) => {
    NavigationManager.showModal(createNavigationProps(componentsWithNavigationProps.MultiSelect)({
      passProps: {
        options,
        onSubmit: (result: T[]) => {
          callback(result);
          NavigationManager.dismissModal();
        },
      },
      navigatorStyle: {
        screenBackgroundColor: 'white',
      },
    }));
  };

  _isBodyweightChanged = () =>
    this.setState(({ isBodyweight }) => ({
      isBodyweight: !isBodyweight,
    }));

  _relativeBodyweightChanged = (relativeBodyweight: number) =>
    this.setState({
      relativeBodyweight,
    });

  render() {
    return (
      <View>
        <Text>
          Name:
        </Text>
        <TextInput
          value={this.state.name}
          onChangeText={this._nameChanged}
        />

        <CheckBox
          checked={this.state.isBodyweight}
          title="Is bodyweight"
          onPress={this._isBodyweightChanged}
        />

        {this.state.isBodyweight &&
          <View>
            <Text>
              Relative bodyweight:
            </Text>
            <Slider
              maximumValue={100}
              minimumValue={0}
              value={this.state.relativeBodyweight}
              step={1}
              onValueChange={this._relativeBodyweightChanged}
            />
            <NumericInput
              minValue={0}
              maxValue={100}
              initialNumber={this.state.relativeBodyweight}
              onChangeNumber={this._relativeBodyweightChanged}
            />
          </View>
        }

        <RadioForm
          radio_props={radioProps}
          initial={0}
          onPress={this._exerciseTypeChanged}
          formHorizontal={true}
          labelHorizontal={false}
          buttonColor="#2196f3"
          animation={false}
        />

        <Button
          title="Primary muscle groups"
          onPress={this._navigateToPrimaryMuscleGroups}
        />
        <Button
          title="secondary muscle groups"
          onPress={this._navigateToSecondaryMuscleGroups}
        />
        <Button
          title="Planes of movement"
          onPress={this._navigateToPlanesOfMovement}
        />

        <Button
          title="Submit exercise"
          onPress={this._addExercise}
        />
      </View>
    );
  }
}
