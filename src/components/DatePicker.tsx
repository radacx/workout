import { dateUtils } from '../utils/dateUtils';
import * as React from 'react';
import CustomDatePicker from 'react-native-datepicker';

type Props = Readonly<{
  placeholder?: string;
  format?: string;
  confirmBtnText?: string;
  cancelBtnText?: string;
  value?: number;
  onDateChange: (date: number) => void;
}>;

type State = Readonly<{
  date: string;
}>;

export class DatePicker extends React.PureComponent<Props, State> {
  static displayName = 'DatePicker';

  constructor(props: Props) {
    super(props);

    this.state = {
      date: this._getInitialStringDate(props.value),
    };
  }

  _getInitialStringDate = (date?: number) =>
    dateUtils.toStringFromNumber(
      date || dateUtils.toNumber(new Date()));

  _onDateChanged = (dateString: string) => {
    this.setState({
      date: dateString,
    });

    const date = dateUtils.fromTextToNumber(dateString);
    this.props.onDateChange(date);
  };

  componentWillReceiveProps(props: Props) {
    this.setState({
      date: this._getInitialStringDate(props.value),
    });
  }

  render() {
    const {
      placeholder = 'Select date',
      format = 'DD.MM.YYYY',
      confirmBtnText = 'Confirm',
      cancelBtnText = 'Cancel',
    } = this.props;

    return (
      <CustomDatePicker
        date={this.state.date}
        placeholder={placeholder}
        format={format}
        confirmBtnText={confirmBtnText}
        cancelBtnText={cancelBtnText}
        onDateChange={this._onDateChanged}
        mode="date"
        androidMode="spinner"
      />
    );
  }
}
