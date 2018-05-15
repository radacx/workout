import PropTypes from 'prop-types';
import * as React from 'react';
import { Validation } from '../../_types/validation/Validation';
import { dateUtils } from '../../_shared/utils/dateUtils';

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
    return null;
  }
}
