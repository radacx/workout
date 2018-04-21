import {
  Text,
  View,
} from 'react-native';
import React from 'react';
import { DatePicker } from '../../_shared/components/DatePicker';
import { ProgressionGraph } from '../containers/ProgressionGraph';
import { TrainingSession } from '../../_types/data/TrainingSession';
import { FilteredValue } from './ProgressionGraph';
import { SessionExercise } from '../../_types/data/SessionExercise';
import { Exercise } from '../../_types/data/Exercise';
import { Uuid } from '../../_types/Uuid';
import { ComboBox } from '../../_shared/components/ComboBox';
import {
  allMuscleGroups,
  MuscleGroup,
} from '../../_types/enums/MuscleGroup';
import {
  allPlanesOfMovement,
  MovementPlane,
} from '../../_types/enums/MovementPlane';
import { getSessionTotalLoad } from '../../_shared/utils/getSessionTotalLoad';

export enum AnalyticsFilterBy {
  MuscleGroup = 'Muscle group',
  PlaneOfMovement = 'Movement plane',
  Exercise = 'Exercise',
}

const allFilterByValues = Object.keys(AnalyticsFilterBy).map((key: any) => AnalyticsFilterBy[key]);

export type AnalyticsAppDataProps = {
  readonly allExercises: Exercise[];
};

type State = {
  readonly dateFrom: number;
  readonly dateTo: number;
  readonly filterBy: AnalyticsFilterBy;
  readonly filterExercise: (sessionExercise: SessionExercise) => boolean;
};

export class AnalyticsApp extends React.PureComponent<AnalyticsAppDataProps, State> {
  static displayName = 'AnalyticsApp';

  readonly state: State = {
    dateTo: Number.MAX_SAFE_INTEGER,
    dateFrom: Number.MIN_SAFE_INTEGER,
    filterBy: AnalyticsFilterBy.Exercise,
    filterExercise: () => false,
  };

  _changeDateFrom = (dateFrom: number) => this.setState({ dateFrom });

  _changeDateTo = (dateTo: number) => this.setState({ dateTo });

  _changeFilterBy = (filterBy: AnalyticsFilterBy) => this.setState({ filterBy });

  _getExerciseById = (id: Uuid) =>
    this.props.allExercises.find(ex => ex.id === id);

  _setExerciseFilter = ({ id }: Exercise) =>
    this.setState({
      filterExercise: (se: SessionExercise) => se.exerciseId === id,
    });

  _getFilterFunction = (sessions: TrainingSession[]): FilteredValue[] => {
    const { dateFrom, dateTo, filterExercise } = this.state;

    return sessions
      .filter(session =>
        session.date >= dateFrom
        && session.date <= dateTo
      )
      .map(session => ({
        date: session.date,
        value: getSessionTotalLoad(session, this._getExerciseById, filterExercise),
      }));
  };

  _setMuscleGroupFilter = (muscleGroup: MuscleGroup) => {
    this.setState({
      filterExercise: (se: SessionExercise) => {
        const exercise = this._getExerciseById(se.exerciseId);

        return exercise
          ? exercise.primaryMuscleGroups.indexOf(muscleGroup) !== -1
          : false;
      },
    });
  };

  _setMovementPlaneFilter = (movementPlane: MovementPlane) => {
    this.setState({
      filterExercise: (se: SessionExercise) => {
        const exercise = this._getExerciseById(se.exerciseId);

        return exercise
          ? exercise.planesOfMovement.indexOf(movementPlane) !== -1
          : false;
      },
    });
  };

  _getFilterComponent = () => {
    switch (this.state.filterBy) {
      case AnalyticsFilterBy.Exercise: {
        return (
          <ComboBox
            items={this.props.allExercises}
            getLabel={exercise => exercise.name}
            onItemChange={this._setExerciseFilter}
          />
        );
      }
      case AnalyticsFilterBy.MuscleGroup: {
        return (
          <ComboBox
            items={allMuscleGroups}
            onItemChange={this._setMuscleGroupFilter}
            getLabel={mg => mg}
          />
        );
      }
      case AnalyticsFilterBy.PlaneOfMovement: {
        return (
          <ComboBox
            items={allPlanesOfMovement}
            onItemChange={this._setMovementPlaneFilter}
            getLabel={pom => pom}
          />
        );
      }
      default:
        return null;
    }
  };

  render() {
    return (
      <View>
        <Text>
          From:
        </Text>
        <DatePicker
          value={this.state.dateFrom}
          onDateChange={this._changeDateFrom}
        />

        <Text>
          To:
        </Text>
        <DatePicker
          value={this.state.dateTo}
          onDateChange={this._changeDateTo}
        />

        <ComboBox
          items={allFilterByValues}
          onItemChange={this._changeFilterBy}
          getLabel={filterBy => filterBy}
        />

        {this._getFilterComponent()}

        <ProgressionGraph filterFunction={this._getFilterFunction}/>
      </View>
    );
  }
}
