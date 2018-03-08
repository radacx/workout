import * as React from 'react';
import {
  TextInput,
  TextInputProperties,
} from 'react-native';

interface INumericInputProps extends TextInputProperties {
  readonly initialNumber?: number;
  readonly onChangeNumber: (num: number) => void;
}

interface INumericInputState {
  readonly number: string;
}

export class NumericInput extends React.PureComponent<INumericInputProps, INumericInputState> {
  readonly state: INumericInputState = {
    number: this.props.initialNumber ? this.props.initialNumber.toString() : '',
  };

  _numberChanged = (numberText: string) => {
    this.setState({
      number: numberText,
    });

    this.props.onChangeNumber(+numberText);
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
