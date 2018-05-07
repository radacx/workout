import PropTypes from 'prop-types';
import * as React from 'react';
import {
  TextInput,
  TextInputProperties,
} from 'react-native';
import { Validation } from '../../_types/validation/Validation';

type OwnProps = {
  readonly onChangeNumber: (num: number) => void;
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly initialNumber?: number;
};

type Props = OwnProps & Readonly<TextInputProperties>;

type State = {
  readonly number?: string;
};

export class NumericInput extends React.PureComponent<Props, State> {
  static displayName = 'NumericInput';

  static propTypes: Validation<OwnProps> = {
    onChangeNumber: PropTypes.func.isRequired,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    initialNumber: PropTypes.number,
  };

  static defaultProps: Partial<Props> = {
    minValue: Number.MIN_SAFE_INTEGER,
    maxValue: Number.MAX_SAFE_INTEGER,
  };

  readonly state: State = {
    number: '0',
  };

  static getDerivedStateFromProps = ({ minValue, initialNumber }: Props): Partial<State> | null => ({
    number: initialNumber === undefined
      ? undefined
      : Math.max(initialNumber, minValue!)
        .toString(),
  });

  _numberChanged = (numberText: string) => {
    let num = +numberText;
    const min = this.props.minValue!;
    const max = this.props.maxValue!;

    if (num < min) {
      num = min;
    } else if (num > max) {
      num = max;
    }

    this.setState({
      number: num.toString(),
    });

    this.props.onChangeNumber(num);
  };

  render() {
    return (
      <TextInput
        {...this.props}
        keyboardType="numeric"
        value={this.state.number}
        onChangeText={this._numberChanged}
      />
    );
  }
}
