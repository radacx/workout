import * as React from 'react';
import {
  View,
  FlatList,
  ListRenderItemInfo,
  Text,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

export interface IMultiSelectProps {
  readonly options: string[];
}

interface IMultiSelectState {
  readonly options: boolean[];
}

export class MultiSelect extends React.PureComponent<IMultiSelectProps, IMultiSelectState> {
  static displayName = 'MultiSelect';

  constructor(props: IMultiSelectProps) {
    super(props);

    this.state = {
      options: Array(props.options.length)
        .fill(false),
    };
  }

  _changeChecked = (newValue: boolean, index: number): void =>
    /*this.setState(({ options }) => ({
      options: assignWithGet(options, opts => opts[index], _ => newValue),
    }));*/
    this.setState(({ options }) => ({
      options: {
        ...options,
        [ index ]: newValue,
      }
    }));

  render() {
    return (
      <View>
        <FlatList
          data={this.state.options}
          renderItem={({ item: checked, index }: ListRenderItemInfo<boolean>) =>
            <CheckBox
              checked={checked}
              key={index}
              title={this.props.options[index]}
            />
          }
        />
      </View>
    );
  }
}
