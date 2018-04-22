import PropTypes from 'prop-types';
import { dateUtils } from '../utils/dateUtils';
import * as React from 'react';
import CustomDatePicker from 'react-native-datepicker';
import { Validation } from '../../_types/validation/Validation';

type Props = {
  readonly placeholder?: string;
  readonly format?: string;
  readonly confirmBtnText?: string;
  readonly cancelBtnText?: string;
  readonly value?: number;
  readonly disabled?: boolean;
  readonly onDateChange: (date: number) => void;
};

type State = {
  readonly date: string;
};

export class DatePicker extends React.PureComponent<Props, State> {
  static displayName = 'DatePicker';

  static propTypes: Validation<Props> = {
    onDateChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    format: PropTypes.string,
    confirmBtnText: PropTypes.string,
    cancelBtnText: PropTypes.string,
    value: PropTypes.number,
    disabled: PropTypes.bool,
  };

  static defaultProps: Partial<Props> = {
    placeholder: 'Select date',
    format: 'DD.MM.YYYY',
    confirmBtnText: 'Confirm',
    cancelBtnText: 'Cancel',
    value: dateUtils.toNumber(new Date()),
    disabled: false,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      date: this._getInitialStringDate(props.value!),
    };
  }

  _getInitialStringDate = (date: number) => dateUtils.toStringFromNumber(date);

  _onDateChanged = (dateString: string) => {
    this.setState({ date: dateString });

    const date = dateUtils.fromTextToNumber(dateString);
    this.props.onDateChange(date);
  };

  componentWillReceiveProps(props: Props) {
    this.setState({
      date: this._getInitialStringDate(props.value!),
    });
  }

  render() {
    const {
      placeholder,
      format,
      confirmBtnText,
      cancelBtnText,
      disabled,
    } = this.props;

    return (
      <CustomDatePicker
        disabled={disabled}
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
