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
  readonly number: string;
}

const getTextNumber = (num: number | undefined, minValue: number) =>
  num ? num.toString() : minValue.toString();

export class NumericInput extends React.PureComponent<INumericInputProps, INumericInputState> {
  readonly state: INumericInputState = {
    number: getTextNumber(this.props.initialNumber, this.props.minValue || 0),
  };

  _numberChanged = (numberText: string) => {
    let num = +numberText;
    const min = this.props.minValue || 0;
    const max = this.props.maxValue || 0;

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
      number: getTextNumber(props.initialNumber, this.props.minValue || 0),
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
