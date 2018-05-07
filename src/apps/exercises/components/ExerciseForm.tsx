import PropTypes from 'prop-types';
import {
  View,
  Button,
  Text,
  TextInput,
  Slider,
  Switch,
} from 'react-native';
import React from 'react';
import {
  allMuscleGroups,
  MuscleGroup,
} from '../../_types/enums/MuscleGroup';
import {
  allPlanesOfMovement,
  MovementPlane,
} from '../../_types/enums/MovementPlane';
import { createNewId } from '../../_shared/utils/createNewId';
import { ExerciseType } from '../../_types/enums/ExerciseType';
import { NavigationManager } from './ExercisesApp';
import { getNavigationHelperForComponent } from '../../../navigation/getNavigationHelperForComponent';
import { componentsWithNavigationProps } from '../../../navigation/componentsWithNavigationProps';
import { Exercise } from '../../_types/data/Exercise';
import { NumericInput } from '../../_shared/components/NumericInput';
import { SpecialSelectSelection } from '../../_shared/components/special-select/_types/SpecialSelectSelection';
import { SpecialSelectOption } from '../../_shared/components/special-select/_types/SpecialSelectOption';
import { chunkInTwo } from '../../_shared/utils/chunkInTwo';
import { Validation } from '../../_types/validation/Validation';
const RadioForm = require('react-native-simple-radio-button').default;

const radioProps = [
  {
    label: ExerciseType.Reps,
    value: ExerciseType.Reps,
  }, {
    label: ExerciseType.Duration,
    value: ExerciseType.Duration,
  },
];
const muscleGroupOptions = allMuscleGroups.map(muscleGroup => (
  {
    label: muscleGroup,
    leftValue: 'Primary',
    rightValue: 'Secondary',
  }
));
const planesOfMovementOptions = chunkInTwo(allPlanesOfMovement)
  .map(planeChunk => (
    {
      leftValue: planeChunk[0],
      rightValue: planeChunk[1],
    }
  ));

export type ExerciseFormCallbackProps = {
  readonly addExercise: (exercise: Exercise) => void;
  readonly updateExercise: (exercise: Exercise) => void;
};

export type ExerciseFormDataProps = {
  readonly exercise?: Exercise;
};

type Props = ExerciseFormCallbackProps & ExerciseFormDataProps;

type State = {
  readonly primaryMuscleGroups: MuscleGroup[];
  readonly secondaryMuscleGroups: MuscleGroup[];
  readonly planesOfMovement: MovementPlane[];
  readonly exerciseType: ExerciseType;
  readonly name: string;
  readonly isBodyweight: boolean;
  readonly relativeBodyweight: number;
};

export class ExerciseForm extends React.PureComponent<Props, State> {
  static displayName = 'ExerciseForm';

  static propTypes: Validation<Props> = {
    addExercise: PropTypes.func.isRequired,
    updateExercise: PropTypes.func.isRequired,
    exercise: PropTypes.object.isRequired,
  };

  readonly state: State = {
    exerciseType: radioProps[0].value,
    name: '',
    planesOfMovement: [],
    primaryMuscleGroups: [],
    secondaryMuscleGroups: [],
    isBodyweight: false,
    relativeBodyweight: 0,
  };

  static getDerivedStateFromProps = ({ exercise }: Props): Partial<State> | null => {
    if (exercise) {
      const { id: _, ...ex } = exercise;

      return {
        ...ex,
        isBodyweight: exercise.relativeBodyweight > 0,
      };
    }

    return null;
  };

  _submitExercise = () => {
    const id = this.props.exercise
      ? this.props.exercise.id
      : createNewId();

    const {
      isBodyweight,
      relativeBodyweight,
      ...exerciseBase,
    } = this.state;

    const exercise: Exercise = {
      ...exerciseBase,
      id,
      relativeBodyweight: isBodyweight ? relativeBodyweight : 0,
    };

    if (this.props.exercise) {
      this.props.updateExercise(exercise);
    } else {
      this.props.addExercise(exercise);
    }

    NavigationManager.pop();
  };

  _nameChanged = (name: string) => this.setState({ name });

  _exerciseTypeChanged = (exerciseType: ExerciseType) =>
    this.setState({ exerciseType });

  _getPlanesOfMovementPreselectedOptions = (): SpecialSelectSelection[] => {
    const poms = this.state.planesOfMovement.map(pom => pom.toString());

    return planesOfMovementOptions
      .map(pom => {
        if (poms.indexOf(pom.leftValue) !== -1) {
          return SpecialSelectSelection.Left;
        } else if (poms.indexOf(pom.rightValue) !== -1) {
          return SpecialSelectSelection.Right;
        }

        return SpecialSelectSelection.Default;
      });
  };

  _planesOfMovementSubmitted = (selectedOptions: SpecialSelectSelection[]) => {
    const poms: MovementPlane[] = [];

    planesOfMovementOptions
      .forEach((pom, index) => {
        const selected = selectedOptions[index];

        if (selected === SpecialSelectSelection.Right) {
          poms.push(pom.rightValue as any);
        } else if (selected === SpecialSelectSelection.Left) {
          poms.push(pom.leftValue as any);
        }
      });

    this.setState({ planesOfMovement: poms });
  };

  _navigateToPlanesOfMovement = () => this._navigateToSpecialSelect(
    planesOfMovementOptions,
    this._planesOfMovementSubmitted,
    this._getPlanesOfMovementPreselectedOptions,
  );

  _muscleGroupsSubmitted = (selectedOptions: SpecialSelectSelection[]) => {
    const primaryMuscleGroups: MuscleGroup[] = [];
    const secondaryMuscleGroups: MuscleGroup[] = [];

    allMuscleGroups
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

    return allMuscleGroups.map(mg => {
      if (primaryMgs.indexOf(mg) !== -1) {
        return SpecialSelectSelection.Left;
      } else if (secondaryMgs.indexOf(mg) !== -1) {
        return SpecialSelectSelection.Right;
      }

      return SpecialSelectSelection.Default;
    });
  };

  _navigateToMuscleGroups = () => this._navigateToSpecialSelect(
    muscleGroupOptions,
    this._muscleGroupsSubmitted,
    this._getMuscleGroupPreselectedOptions,
  );

  _navigateToSpecialSelect = (
    options: SpecialSelectOption[],
    onSubmit: (selectedOptions: SpecialSelectSelection[]) => void,
    getPreselectedOptions: () => SpecialSelectSelection[],
  ) => {
    const helper = getNavigationHelperForComponent(componentsWithNavigationProps.SpecialSelect);

    helper.setTitle('Muscle groups');

    const params = helper.createNavParams({
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
    });

    NavigationManager.showModal(params);
  };

  _isBodyweightChanged = () =>
    this.setState(({ isBodyweight }) =>
      ({
        isBodyweight: !isBodyweight,
      }));

  _relativeBodyweightChanged = (relativeBodyweight: number) =>
    this.setState({ relativeBodyweight });

  render() {
    return (
      <>
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

        {this.state.isBodyweight && <View>
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
        </View>}

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
          title="Planes of movement"
          onPress={this._navigateToPlanesOfMovement}
        />

        <Button
          title="Submit exercise"
          onPress={this._submitExercise}
        />
      </>
    );
  }
}
