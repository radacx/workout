import PropTypes from 'prop-types';
import * as React from 'react';
import { Picker } from 'react-native';
import { Validation } from '../../_types/validation/Validation';

export type ComboBoxProps<TItem> = {
  readonly items: TItem[];
  readonly getLabel: (item: TItem) => string;
  readonly onItemChange: (item: TItem) => void;
  readonly value?: TItem;
};

export const comboBoxPropTypes: Validation<ComboBoxProps<any>> = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  getLabel: PropTypes.func.isRequired,
  onItemChange: PropTypes.func.isRequired,
  value: PropTypes.any,
};

type State<TItem> = {
  readonly selectedItem?: TItem;
};

export class ComboBox<TItem> extends React.PureComponent<ComboBoxProps<TItem>, State<TItem>> {
  static displayName = 'ComboBox';

  static propTypes = comboBoxPropTypes;

  readonly state: State<TItem> = {
    selectedItem: undefined,
  };

  static getDerivedStateFromProps = (nextProps: ComboBoxProps<any>): State<any> | null => ({
    selectedItem: nextProps.value || nextProps.items[0],
  });

  componentDidMount() {
    if (this.state.selectedItem) {
      this.props.onItemChange(this.state.selectedItem);
    }
  }

  _selectedItemChanged = (item: TItem) => {
    this.setState({ selectedItem: item });

    this.props.onItemChange(item);
  };

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
