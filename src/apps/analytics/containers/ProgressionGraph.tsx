import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import {
  FilteredValue,
  ProgressionGraph as ProgressionGraphComponent,
  ProgressionGraphDataProps,
} from '../components/ProgressionGraph';
import { IStore } from '../../_shared/store/IStore';
import { TrainingSession } from '../../_types/data/TrainingSession';
import { homogenousObjectToArray } from '../../_shared/utils/homogenousObjectToArray';
import { Validation } from '../../_types/validation/Validation';

type Props = {
  readonly filterFunction: (sessions: TrainingSession[]) => FilteredValue[];
};

const propTypes: Validation<Props> = {
  filterFunction: PropTypes.func.isRequired,
};

const mapStateToProps = ({ trainingLogApp }: IStore, { filterFunction }: Props): ProgressionGraphDataProps => ({
  filteredValues: filterFunction(homogenousObjectToArray(trainingLogApp.sessions)),
});

const ProgressionGraph: React.ComponentClass<Props> = connect(
  mapStateToProps
)(ProgressionGraphComponent);

ProgressionGraph.propTypes = propTypes;

export { ProgressionGraph };

