import * as React from 'react';
import {
  View,
  FlatList,
  ListRenderItemInfo,
  Button,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { assignWithGet } from '../utils/assign';

export interface IMultiSelectProps<T> {
  readonly options: T[];
  readonly onSubmit?: (selectedOptions: T[]) => void;
  readonly renderTitle?: (option: T) => string;
}

interface IMultiSelectState {
  readonly options: boolean[];
}

export class MultiSelect<T> extends React.PureComponent<IMultiSelectProps<T>, IMultiSelectState> {
  static displayName = 'MultiSelect';

  readonly state: IMultiSelectState = {
    options: Array(this.props.options.length)
      .fill(false),
  };

  _changeChecked = (index: number): void =>
    this.setState(({ options }) => ({
      options: assignWithGet(options, opts => opts[ index ], checked => !checked),
    }));

  _optionToString = (option: T): string =>
    this.props.renderTitle ?
      this.props.renderTitle(option) :
      option.toString();

  _getSelectedOptions = (): T[] =>
    this.props.options
      .filter((_, index) =>
        this.state.options[index]
      );

  _submit = () =>
    this.props.onSubmit ?
      this.props.onSubmit(this._getSelectedOptions()) :
      undefined;

  render() {
    return (
      <View>
        <Button
          title="Submit"
          onPress={this._submit}
        />

        <FlatList
          data={this.state.options}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item: checked, index }: ListRenderItemInfo<boolean>) => {
            const title = this._optionToString(this.props.options[index]);

            return <CheckBox
              checked={checked}
              title={title}
              onPress={() => this._changeChecked(index)}
            />;
          }}
        />
      </View>
    );
  }
}
