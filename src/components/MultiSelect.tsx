import * as React from 'react';
import {
  View,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { assignWithGet } from '../utils/assign';

export interface IMultiSelectProps {
  readonly options: string[];
}

interface IMultiSelectState {
  readonly options: boolean[];
}

export class MultiSelect extends React.PureComponent<IMultiSelectProps, IMultiSelectState> {
  static displayName = 'MultiSelect';

  readonly state: IMultiSelectState = {
    options: Array(this.props.options.length)
      .fill(false),
  };

  _changeChecked = (index: number): void =>
    this.setState(({ options }) => ({
      options: assignWithGet(options, opts => opts[ index ], checked => !checked),
    }));

  render() {
    return (
      <View>
        <FlatList
          data={this.state.options}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item: checked, index }: ListRenderItemInfo<boolean>) =>
            <CheckBox
              checked={checked}
              title={this.props.options[index]}
              onPress={() => this._changeChecked(index)}
            />
          }
        />
      </View>
    );
  }
}
