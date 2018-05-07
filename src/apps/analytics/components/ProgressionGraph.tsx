import PropTypes from 'prop-types';
import * as React from 'react';
import { View } from 'react-native';
import { Validation } from '../../_types/validation/Validation';
import { dateUtils } from '../../_shared/utils/dateUtils';
const {
  LineChart,
  BarChart,
  YAxis,
  XAxis,
  Grid,
} = require('react-native-svg-charts');
import { curveMonotoneX } from 'd3-shape';

export type Point = {
  x: string;
  y: number;
};

type AccessorEntry = {
    item: Point;
    index: number;
};

export type ProgressionGraphDataProps = {
  readonly points: Point[];
};

export class ProgressionGraph extends React.PureComponent<ProgressionGraphDataProps> {
  static displayName = 'ProgressionGraph';

  static propTypes: Validation<ProgressionGraphDataProps> = {
    points: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.string.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired),
  };

  _formatLoad = (load: any) => `${load} kg`;

  _formatDate = (date: number) => dateUtils.toStringFromNumber(date);

  _yAccessor = ({ item }: AccessorEntry) => item.y;

  _xAccessor = ({ item }: AccessorEntry) => item.x;

  render() {
    const axesSvg = { fontSize: 10, fill: 'grey' };
    const xAxisHeight = 30;

    const dataY = this.props.points.map(fv => fv.y);
    const maxValue = 1.4 * dataY.reduce((max, curr) => Math.max(max, curr));

    const Chart = dataY.length > 1
      ? LineChart
      : BarChart;

    const chartSvg = dataY.length > 1
      ? { stroke: 'rgb(134, 65, 244)' }
      : { fill: 'rgb(134, 65, 244)' };

    return (
      <View style={{
        height: 200,
        padding: 20,
        flexDirection: 'row',
      }}>
        <YAxis
          data={ this.props.points }
          yAccessor={this._yAccessor}
          style={ { marginBottom: xAxisHeight } }
          contentInset={ { top: 10, bottom: 10 } }
          svg={axesSvg}
          numberOfTicks={5}
          max={maxValue}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Chart
            style={{ flex: 1 }}
            data={ dataY }
            svg={chartSvg}
            contentInset={ { top: 10, bottom: 10, left: 10, right: 10 } }
            gridMax={maxValue}
            curve={curveMonotoneX}
          >
            <Grid />
          </Chart>
          <XAxis
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            data={this.props.points}
            xAccessor={this._xAccessor}
            contentInset={ { left: 10, right: 10 } }
          />
        </View>
      </View>
    );
  }
}
