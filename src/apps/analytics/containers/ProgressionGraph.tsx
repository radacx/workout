import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import {
  Point,
  ProgressionGraph as ProgressionGraphComponent,
  ProgressionGraphDataProps,
} from '../components/ProgressionGraph';
import { IStore } from '../../_shared/store/IStore';
import { homogenousObjectToArray } from '../../_shared/utils/homogenousObjectToArray';
import { Validation } from '../../_types/validation/Validation';
import { SessionExercise } from '../../_types/data/SessionExercise';
import { getSessionTotalLoad } from '../../_shared/utils/getSessionTotalLoad';
import { TrainingSession } from '../../_types/data/TrainingSession';
import { Uuid } from '../../_types/Uuid';
import { Exercise } from '../../_types/data/Exercise';
import { AnalyticsGroupBy } from '../components/AnalyticsApp';
import { dateUtils } from '../../_shared/utils/dateUtils';

const getGroupinfKeyCreator = (groupBy: AnalyticsGroupBy) =>
  (baseDate: number): string => {
    const date = new Date(baseDate);

    switch (groupBy) {
      case AnalyticsGroupBy.Day: {
        return [ date.getDate(), date.getMonth() + 1, date.getFullYear() ].join('/');
      }
      case AnalyticsGroupBy.Week: {
        return [ dateUtils.getWeek(date), date.getFullYear() ].join('/');
      }
      case AnalyticsGroupBy.Month1: {
        return [ date.getMonth() + 1, date.getFullYear() ].join('/');
      }
      case AnalyticsGroupBy.Month3: {
        return [ date.getMonth() % 3 + 1, date.getFullYear() ].join('/');
      }
      case AnalyticsGroupBy.Month6: {
        return [ date.getMonth() % 6 + 1, date.getFullYear() ].join('/');
      }
      case AnalyticsGroupBy.Year: {
        return date.getFullYear().toString();
      }
      default:
        return baseDate.toString();
    }
  };

const getFilterFunction = (sessions: TrainingSession[], getExerciseById: (id: Uuid) => Exercise, { dateTo, dateFrom, filterExercise, groupBy }: Props): Point[] => {
  const getGroupingKey = getGroupinfKeyCreator(groupBy);

  return sessions
    .filter(session => session.date >= dateFrom && session.date <= dateTo)
    .map(session => (
      {
        date: session.date,
        load: getSessionTotalLoad(session, getExerciseById, filterExercise),
      }
    ))
    .reduce(
      (groupPoints, { date, load }) => {
        const groupingKey = getGroupingKey(date);
        const foundPoint = groupPoints.find(groupPoint => groupPoint.groupingKey === groupingKey);

        if (foundPoint) {
          foundPoint.load += load;
          return groupPoints;
        }

        console.log(`new: ${JSON.stringify({ groupingKey, load })}`);
        return groupPoints.concat({ groupingKey, load });
      },
      [] as { groupingKey: string, load: number }[],
    )
    .map(({ groupingKey, load }) => ({ x: groupingKey, y: load }));
};

type Props = {
  readonly dateFrom: number;
  readonly dateTo: number;
  readonly filterExercise: (sessionExercise: SessionExercise) => boolean;
  readonly groupBy: AnalyticsGroupBy;
};

const propTypes: Validation<Props> = {
  dateFrom: PropTypes.number.isRequired,
  dateTo: PropTypes.number.isRequired,
  filterExercise: PropTypes.func.isRequired,
  groupBy: PropTypes.string.isRequired,
};

const mapStateToProps = ({ trainingLogApp, exercisesApp }: IStore, ownProps: Props): ProgressionGraphDataProps => {
  const getExerciseById = (id: Uuid) => exercisesApp.exercises[id];

  return {
    points: getFilterFunction(homogenousObjectToArray(trainingLogApp.sessions), getExerciseById, ownProps),
  };
};

const ProgressionGraph: React.ComponentClass<Props> = connect(
  mapStateToProps
)(ProgressionGraphComponent);

ProgressionGraph.propTypes = propTypes;

export { ProgressionGraph };

