import * as React from 'react';
import { connect } from 'react-redux';
import {
  AnalyticsApp as AnalyticsAppComponent,
  AnalyticsAppDataProps,
} from '../components/AnalyticsApp';
import { IStore } from '../../_shared/store/IStore';
import { homogenousObjectToArray } from '../../_shared/utils/homogenousObjectToArray';

const mapStateToProps = ({ exercisesApp }: IStore): AnalyticsAppDataProps => ({
  allExercises: homogenousObjectToArray(exercisesApp.exercises),
});

export const AnalyticsApp: React.ComponentClass = connect(
  mapStateToProps,
)(AnalyticsAppComponent);
