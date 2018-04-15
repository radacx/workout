import {
  Text,
  View,
} from 'react-native';
import React from 'react';
import { DatePicker } from './apps/_shared/components/DatePicker';

type Props = Readonly<{}>;

type State = Readonly<{
  dateFrom?: number;
  dateTo?: number;
}>;

export class Analytics extends React.PureComponent<Props, State> {
  static displayName = 'Analytics';

  _changeDateFrom = (dateFrom: number) =>
    this.setState({
      dateFrom,
    });

  _changeDateTo = (dateTo: number) =>
    this.setState({
      dateTo,
    });

  render() {
    return (
      <View>
        <Text>
          From:
        </Text>
        <DatePicker
          value={this.state.dateFrom}
          onDateChange={this._changeDateFrom}
        />

        <Text>
          To:
        </Text>
        <DatePicker
          value={this.state.dateTo}
          onDateChange={this._changeDateTo}
        />
      </View>
    );
  }
}
