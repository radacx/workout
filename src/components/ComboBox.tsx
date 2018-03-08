import * as React from 'react';
import { Picker } from 'react-native';

interface IComboBoxProps<T> {
  readonly items: T[];
  readonly getLabel: (item: T) => string;
  readonly onItemChange: (item: T) => void;
}

interface IComboBoxState<T> {
  readonly selectedItem: T;
}

export class ComboBox<T> extends React.PureComponent<IComboBoxProps<T>, IComboBoxState<T>> {
  readonly state: IComboBoxState<T> = {
    selectedItem: this.props.items[0],
  };

  _selectedItemChanged = (item: T) => {
    this.setState({
      selectedItem: item,
    });

    this.props.onItemChange(item);
  };

  render() {
    const pickerValues = this.props.items.map((item, index) =>
      <Picker.Item
        key={index}
        label={this.props.getLabel(item)}
        value={item}
      />
    );

    return (
      <Picker
        selectedValue={this.state.selectedItem}
        onValueChange={this._selectedItemChanged}
      >
        {pickerValues}
      </Picker>
    );
  }
}
