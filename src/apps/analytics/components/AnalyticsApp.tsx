import {
  Text,
  Switch,
} from 'react-native';
import React from 'react';
import { DatePicker } from '../../_shared/components/DatePicker';
import { ProgressionGraph } from '../containers/ProgressionGraph';
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
import { dateUtils } from '../../_shared/utils/dateUtils';

export enum AnalyticsFilterBy {
  MuscleGroup = 'Muscle group',
  PlaneOfMovement = 'Movement plane',
  Exercise = 'Exercise',
}

export enum AnalyticsGroupBy {
  Day = 'Day',
  Week = 'Week',
  Month1 = '1 Months',
  Month3 = '3 Months',
  Month6 = '6 Months',
  Year = 'Year',
}

const allFilterByValues = Object.keys(AnalyticsFilterBy).map((key: any) => AnalyticsFilterBy[key]);

const allGroupByValues = Object.keys(AnalyticsGroupBy).map((key: any) => AnalyticsGroupBy[key]);

export type AnalyticsAppDataProps = {
  readonly allExercises: Exercise[];
};

type State = {
  readonly ignoreDateFromLimit: boolean;
  readonly ignoreDateToLimit: boolean;
  readonly dateFrom: number;
  readonly dateTo: number;
  readonly filterBy: AnalyticsFilterBy;
  readonly groupBy: AnalyticsGroupBy;
  readonly filterByValue?: any;
  readonly filterExercise: (sessionExercise: SessionExercise) => boolean;
};

export class AnalyticsApp extends React.PureComponent<AnalyticsAppDataProps, State> {
  static displayName = 'AnalyticsApp';

  readonly state: State = {
    ignoreDateFromLimit: true,
    ignoreDateToLimit: true,
    dateTo: dateUtils.todayToNumber(),
    dateFrom: dateUtils.todayToNumber(),
    filterBy: AnalyticsFilterBy.Exercise,
    groupBy: AnalyticsGroupBy.Day,
    filterExercise: () => true,
  };

  _changeDateFrom = (dateFrom: number) => this.setState({ dateFrom });

  _changeDateTo = (dateTo: number) => this.setState({ dateTo });

  _changeFilterBy = (filterBy: AnalyticsFilterBy) => this.setState({ filterBy });

  _changeGroupBy = (groupBy: AnalyticsGroupBy) => this.setState({ groupBy });

  _toggleIgnoreDateFrom = (ignoreDateFromLimit: boolean) => this.setState({ ignoreDateFromLimit });

  _toggleIgnoreDateTo = (ignoreDateToLimit: boolean) => this.setState({ ignoreDateToLimit });

  _getExerciseById = (id: Uuid) =>
    this.props.allExercises.find(ex => ex.id === id);

  _setExerciseFilter = (exercise: Exercise) => {
    this.setState({
      filterExercise: (se: SessionExercise) => se.exerciseId === exercise.id,
      filterByValue: exercise,
    });
  };

  _setMuscleGroupFilter = (muscleGroup: MuscleGroup) => {
    this.setState({
      filterExercise: (se: SessionExercise) => {
        const exercise = this._getExerciseById(se.exerciseId);

        return exercise
          ? exercise.primaryMuscleGroups.indexOf(muscleGroup) !== -1
          : false;
      },
      filterByValue: muscleGroup,
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
      filterByValue: movementPlane,
    });
  };

  _renderFilterComponent = () => {
    const { filterByValue } = this.state;

    switch (this.state.filterBy) {
      case AnalyticsFilterBy.Exercise: {
        return (
          <ComboBox
            value={filterByValue}
            items={this.props.allExercises}
            getLabel={exercise => exercise.name}
            onItemChange={this._setExerciseFilter}
          />
        );
      }
      case AnalyticsFilterBy.MuscleGroup: {
        return (
          <ComboBox
            value={filterByValue}
            items={allMuscleGroups}
            onItemChange={this._setMuscleGroupFilter}
            getLabel={mg => mg}
          />
        );
      }
      case AnalyticsFilterBy.PlaneOfMovement: {
        return (
          <ComboBox
            value={filterByValue}
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
    const dateFrom = this.state.ignoreDateFromLimit
      ? Number.MIN_SAFE_INTEGER
      : this.state.dateFrom;
    const dateTo = this.state.ignoreDateToLimit
      ? Number.MAX_SAFE_INTEGER
      : this.state.dateTo;

    return (
      <>
        <Text>
          From:
        </Text>
        <DatePicker
          disabled={this.state.ignoreDateFromLimit}
          value={this.state.dateFrom}
          onDateChange={this._changeDateFrom}
        />
        <Switch
          value={this.state.ignoreDateFromLimit}
          onValueChange={this._toggleIgnoreDateFrom}
        />

        <Text>
          To:
        </Text>
        <DatePicker
          disabled={this.state.ignoreDateToLimit}
          value={this.state.dateTo}
          onDateChange={this._changeDateTo}
        />
        <Switch
          value={this.state.ignoreDateToLimit}
          onValueChange={this._toggleIgnoreDateTo}
        />

        <Text>
          Filter by
        </Text>
        <ComboBox
          items={allFilterByValues}
          value={this.state.filterBy}
          onItemChange={this._changeFilterBy}
          getLabel={filterBy => filterBy}
        />

        {this._renderFilterComponent()}

        <Text>
          Group by
        </Text>
        <ComboBox
          items={allGroupByValues}
          value={this.state.groupBy}
          onItemChange={this._changeGroupBy}
          getLabel={groupBy => groupBy}
          />

        <ProgressionGraph
          dateFrom={dateFrom}
          dateTo={dateTo}
          filterExercise={this.state.filterExercise}
          groupBy={this.state.groupBy}
        />
      </>
    );
  }
}
