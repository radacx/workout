import PropTypes from 'prop-types';
import * as React from 'react';
import { View } from 'react-native';
import { Validation } from '../../_types/validation/Validation';
import { curveMonotoneX } from 'd3-shape';
const {
  LineChart,
  YAxis,
} = require('react-native-svg-charts');

export type FilteredValue = {
  date: number;
  value: number;
};

export type ProgressionGraphDataProps = {
  readonly filteredValues: FilteredValue[];
};

export class ProgressionGraph extends React.PureComponent<ProgressionGraphDataProps> {
  static displayName = 'ProgressionGraph';

  static propTypes: Validation<ProgressionGraphDataProps> = {
    filteredValues: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const data = this.props.filteredValues.map(fv => fv.value);

    const min = data.reduce(
      (prev, curr) => Math.min(prev, curr),
      Number.MAX_SAFE_INTEGER,
    );

    const max = data.reduce(
      (prev, curr) => Math.max(prev, curr),
      Number.MIN_SAFE_INTEGER,
    );

    const diff = max - min;
    const gridMin = min - diff / 6;
    const gridMax = max + diff / 6;
    const contentInset = { top: 25, bottom: 25, right: 25 };

    return (
      <View style={{
        height: 200,
        flexDirection: 'row',
      }}>
        <YAxis
          data={ data }
          contentInset={ contentInset }
          svg={{
            fill: 'grey',
            fontSize: 15,
          }}
          numberOfTicks={4}
          formatLabel={ (value: any) => `${value} kg` }
          min={gridMin}
          max={gridMax}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={ data }
          svg={{
            stroke: 'rgb(134, 65, 244)',
            strokeWidth: 3,
          }}
          contentInset={ contentInset }
          gridMin={gridMin}
          gridMax={gridMax}
          curve={curveMonotoneX}
        />
      </View>
    );
  }
}
