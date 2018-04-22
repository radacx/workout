import PropTypes from 'prop-types';
import * as React from 'react';
import { View } from 'react-native';
import { Validation } from '../../_types/validation/Validation';
import { dateUtils } from '../../_shared/utils/dateUtils';
const {
  LineChart,
  YAxis,
  XAxis,
  Grid,
} = require('react-native-svg-charts');
import { curveMonotoneX } from 'd3-shape';

export type Point = {
  x: string;
  y: number;
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

  componentDidMount() {
    console.log(',pinted;')
  }

  render() {
    console.log('render');
    const axesSvg = { fontSize: 10, fill: 'grey' };
    const xAxisHeight = 30;

    const dataY = this.props.points.map(fv => fv.y);
    const dataX = this.props.points.map(fv => fv.x);

    console.log(JSON.stringify(dataX));
    console.log(JSON.stringify(dataY));

    const maxValue = 1.4 * dataY.reduce((max, curr) => Math.max(max, curr));

    return (
      <View style={{
        height: 200,
        padding: 20,
        flexDirection: 'row',
      }}>
        <YAxis
          data={ dataY }
          style={ { marginBottom: xAxisHeight } }
          contentInset={ { top: 10, bottom: 10 } }
          svg={axesSvg}
          numberOfTicks={5}
          max={maxValue}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={ dataY }
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={ { top: 10, bottom: 10, left: 10, right: 10 } }
            gridMax={maxValue}
            curve={curveMonotoneX}
          >
            <Grid />
          </LineChart>
          <XAxis
            style={{ marginHorizontal: -10, height: xAxisHeight }}
            data={ dataX }
            contentInset={ { left: 10, right: 10 } }
          />
        </View>
      </View>
    );
  }
}
