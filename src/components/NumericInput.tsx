import * as React from 'react';
import {
  TextInput,
  TextInputProperties,
} from 'react-native';

interface OwnProps {
  minValue?: number;
  maxValue?: number;
  initialNumber?: number;
  onChangeNumber: (num: number) => void;
}

type Props = Readonly<OwnProps & TextInputProperties>;

type State = Readonly<{
  readonly number?: string;
}>;


export class NumericInput extends React.PureComponent<Props, State> {
  static displayName = 'NumericInput';

  constructor(props: Props) {
    super(props);

    const minValue = this.props.minValue || 0;

    this.state = {
      number: this._getText(minValue, this.props.initialNumber),
    };
  }

  _getText = (minNumber: number, initialNumber?: number) =>
    initialNumber === undefined
      ? undefined
      : Math.max(initialNumber, minNumber)
        .toString();

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

  componentWillReceiveProps(props: Props) {
    this.setState({
      number: this._getText(
        this.props.minValue || 0,
        props.initialNumber
      ),
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
