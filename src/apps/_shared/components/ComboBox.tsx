import PropTypes from 'prop-types';
import * as React from 'react';
import { Picker } from 'react-native';
import { Validation } from '../../_types/validation/Validation';

type Props<TItem> = {
  readonly items: TItem[];
  readonly getLabel: (item: TItem) => string;
  readonly onItemChange: (item: TItem) => void;
};

type State<TItem> = {
  readonly selectedItem: TItem;
};

export class ComboBox<TItem> extends React.PureComponent<Props<TItem>, State<TItem>> {
  static displayName = 'ComboBox';

  static propTypes: Validation<Props<any>> = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    getLabel: PropTypes.func.isRequired,
    onItemChange: PropTypes.func.isRequired,
  };

  readonly state: State<TItem> = {
    selectedItem: this.props.items[0],
  };

  _selectedItemChanged = (item: TItem) => {
    this.setState({ selectedItem: item });

    this.props.onItemChange(item);
  };

  componentWillReceiveProps(props: Props<TItem>) {
    this.setState({
      selectedItem: props.items[0],
    });
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.selectedItem}
        onValueChange={this._selectedItemChanged}
      >
        {this.props.items.map((item, index) =>
          <Picker.Item
            key={index}
            label={this.props.getLabel(item)}
            value={item}
          />
        )}
      </Picker>
    );
  }
}
