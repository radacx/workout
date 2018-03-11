import {
  View,
  Button,
  Text,
  TextInput,
  Slider,
  Switch,
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
import { NumericInput } from '../NumericInput';
import {
  SpecialSelectOption,
  SpecialSelectSelection,
} from '../SpecialSelect';

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

const muscleGroupOptions = muscleGroups.map(muscleGroup => ({
  label: muscleGroup,
  leftValue: 'Primary',
  rightValue: 'Secondary',
}));

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

  _muscleGroupsSubmitted = (selectedOptions: SpecialSelectSelection[]) => {
    const primaryMuscleGroups: MuscleGroup[] = [];
    const secondaryMuscleGroups: MuscleGroup[] = [];

    muscleGroups
      .forEach((muscleGroup, index) => {
        if (selectedOptions[index] === SpecialSelectSelection.Left) {
          primaryMuscleGroups.push(muscleGroup as any);
        } else if (selectedOptions[index] === SpecialSelectSelection.Right) {
          secondaryMuscleGroups.push(muscleGroup as any);
        }
      });

    this.setState({
      primaryMuscleGroups,
      secondaryMuscleGroups,
    });
  };

  _getMuscleGroupPreselectedOptions = (): SpecialSelectSelection[] => {
    const primaryMgs = this.state.primaryMuscleGroups.map(mg => mg.toString());
    const secondaryMgs = this.state.secondaryMuscleGroups.map(mg => mg.toString());

    return muscleGroups.map(mg => {
      if (primaryMgs.indexOf(mg) !== -1) {
        return SpecialSelectSelection.Left;
      } else if (secondaryMgs.indexOf(mg) !== -1) {
        return SpecialSelectSelection.Right;
      } else {
        return SpecialSelectSelection.Default;
      }
    });
  };

  _navigateToMuscleGroups = () =>
    this._navigateToSpecialSelect(muscleGroupOptions, this._muscleGroupsSubmitted, this._getMuscleGroupPreselectedOptions);

  _navigateToSpecialSelect = (options: SpecialSelectOption[], onSubmit: (selectedOptions: SpecialSelectSelection[]) => void, getPreselectedOptions: () => SpecialSelectSelection[]) => {
    NavigationManager.showModal(createNavigationProps(componentsWithNavigationProps.SpecialSelect)(
      {
        passProps: {
          options,
          preselectedOptions: getPreselectedOptions(),
          onSubmit: (selectedOptions: SpecialSelectSelection[]) => {
            onSubmit(selectedOptions);
            NavigationManager.dismissModal();
          },
        },
        navigatorStyle: {
          screenBackgroundColor: 'white',
        },
      },
      'Muscle groups',
    ));
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

        <Text>
          Is bodyweight
        </Text>
        <Switch
          value={this.state.isBodyweight}
          onValueChange={this._isBodyweightChanged}
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
          title="Muscle groups"
          onPress={this._navigateToMuscleGroups}
        />

        <Button
          title="Submit exercise"
          onPress={this._addExercise}
        />
      </View>
    );
  }
}
