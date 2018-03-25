import * as React from 'react';
import { Picker } from 'react-native';

type Props<T> = Readonly<{
  items: T[];
  getLabel: (item: T) => string;
  onItemChange: (item: T) => void;
}>;

type State<T> = Readonly<{
  selectedItem: T;
}>;

export class ComboBox<T> extends React.PureComponent<Props<T>, State<T>> {
  static displayName = 'ComboBox';

  readonly state: State<T> = {
    selectedItem: this.props.items[ 0 ],
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
      />,
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
