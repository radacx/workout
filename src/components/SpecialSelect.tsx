import React from 'react';
import {
  Button,
  FlatList,
  ListRenderItemInfo,
  Text,
  View,
} from 'react-native';
import { assign } from '../utils/assign';

const { SegmentedControls } = require('react-native-radio-buttons');

export enum SpecialSelectSelection {
  Left = 0,
  Default = 1,
  Right = 2,
}

export interface SpecialSelectOption {
  label?: string;
  leftValue: any;
  rightValue: any;
}

interface Props {
  options: SpecialSelectOption[];
  preselectedOptions?: SpecialSelectSelection[];
  onSubmit: (selectedOptions: SpecialSelectSelection[]) => void;
}

interface TransformedProps {
  switchOptions: SwitchItems[];
  preselectedOptions?: SpecialSelectSelection[];
  onSubmit: (selectedOptions: SpecialSelectSelection[]) => void;
}

interface SwitchItems {
  label?: string;
  initial: SpecialSelectSelection;
  options: SwitchItem[];
}

interface SwitchItem {
  label: string;
  value: any;
}

interface State {
  selectedItems: SpecialSelectSelection[];
}

export const SpecialSelect: React.SFC<Props> = ({ options, onSubmit, preselectedOptions }) => {
    const switchOptions: SwitchItems[] = options.map((option, index) => ({
      label: option.label,
      initial: preselectedOptions ? (preselectedOptions[index] != null ? preselectedOptions[index] : SpecialSelectSelection.Default) : SpecialSelectSelection.Default,
      options: [
        {
          label: option.leftValue,
          value: SpecialSelectSelection.Left,
        },
        {
          label: 'OFF',
          value: SpecialSelectSelection.Default,
        },
        {
          label: option.rightValue,
          value: SpecialSelectSelection.Right,
        },
      ],
    }));

    return <SpecialSelectTransformed switchOptions={switchOptions} onSubmit={onSubmit} preselectedOptions={preselectedOptions} />;
  };

class SpecialSelectTransformed extends React.PureComponent<TransformedProps, State> {
  readonly state: State = {
    selectedItems: [...Array(this.props.switchOptions.length).keys()]
      .map(index => this.props.preselectedOptions ? this.props.preselectedOptions[index] || SpecialSelectSelection.Default : SpecialSelectSelection.Default),
  };

  _keyExtractor = (_: SwitchItem[], index: number) =>
    index.toString();

  _selectOptions = (position: number, index: SpecialSelectSelection) =>
    this.setState(({ selectedItems }) => ({
      selectedItems: assign(
        selectedItems,
        si => {
          si[ position ] = index;
          return si;
        }
      ),
    }));

  _testOptionEqual = (a: SwitchItems, b: SwitchItems) => {
    if (!a || !b) {
      return false;
    }
    return a.label === b.label;
  };

  _extractText = (option: SwitchItems) =>
    option.label;

  _renderSwitch = ({ item: switchItems, index: position }: ListRenderItemInfo<SwitchItems>) => {
    const optionStyle = {
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Snell Roundhand',
    };

    const containerStyle = {
      marginLeft: 10,
      marginRight: 10,
    };

    return (
      <View>
        {switchItems.label && <Text>
          {switchItems.label}
        </Text>}
        <SegmentedControls
          tint="#f80046"
          selectedTint="white"
          backTint="#1e2126"
          optionStyle={optionStyle}
          containerStyle={containerStyle}
          options={switchItems.options}
          onSelection={(_: any, index: SpecialSelectSelection) => this._selectOptions(
            position,
            index
          )}
          selectedIndex={switchItems.initial}
          extractText={this._extractText}
          testOptionEqual={this._testOptionEqual}
        >
        </SegmentedControls>
      </View>
    );
  };

  _submit = () =>
    this.props.onSubmit(this.state.selectedItems);

  render() {
    return(
      <View>
        <Button
          title="Submit"
          onPress={this._submit}
        />
        <FlatList
          data={this.props.switchOptions}
          renderItem={this._renderSwitch}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
