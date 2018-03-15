import * as React from 'react';
import {
  TextInput,
  TextInputProperties,
} from 'react-native';

interface INumericInputProps extends TextInputProperties {
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly initialNumber?: number;
  readonly onChangeNumber: (num: number) => void;
}

interface INumericInputState {
  readonly number?: string;
}

const getText = (minNumber: number, initialNumber?: number) =>
  initialNumber === undefined ? undefined : Math.max(initialNumber, minNumber).toString();

export class NumericInput extends React.PureComponent<INumericInputProps, INumericInputState> {
  readonly state: INumericInputState = {
    number: getText(this.props.minValue || 0, this.props.initialNumber),
  };

  _numberChanged = (numberText: string) => {
    let num = +numberText;
    const min = this.props.minValue || 0;
    const max = this.props.maxValue || Number.MAX_SAFE_INTEGER;

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

  componentWillReceiveProps(props: INumericInputProps) {
    this.setState({
      number: getText(this.props.minValue || 0, props.initialNumber),
    });
  }

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
