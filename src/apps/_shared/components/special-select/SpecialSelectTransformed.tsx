import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  FlatList,
  ListRenderItemInfo,
  Text,
} from 'react-native';
import { assign } from '../../utils/assign';
import { SwitchItems } from './_types/SwitchItems';
import { SwitchItem } from './_types/SwitchItem';
import { SpecialSelectSelection } from './_types/SpecialSelectSelection';
import { Validation } from '../../../_types/validation/Validation';
const { SegmentedControls } = require('react-native-radio-buttons');

const optionStyle = {
  fontSize: 30,
  fontWeight: 'bold',
  fontFamily: 'Snell Roundhand',
};

const containerStyle = {
  marginLeft: 10,
  marginRight: 10,
};

type Props = {
  readonly switchOptions: SwitchItems[];
  readonly onSubmit: (selectedOptions: SpecialSelectSelection[]) => void;
  readonly preselectedOptions?: SpecialSelectSelection[];
};

type State = {
  readonly selectedItems: SpecialSelectSelection[];
};

export class SpecialSelectTransformed extends React.PureComponent<Props, State> {
  static displayName = 'SpecialSelectTransformed';

  static propTypes: Validation<Props> = {
    switchOptions: PropTypes.arrayOf(PropTypes.any).isRequired,
    onSubmit: PropTypes.func.isRequired,
    preselectedOptions: PropTypes.arrayOf(PropTypes.any),
  };

  readonly state: State = {
    selectedItems: [],
  };

  static getDerivedStateFromProps = ({ preselectedOptions, switchOptions }: Props): Partial<State> | null => ({
    selectedItems: [
        ...Array(switchOptions.length)
          .keys(),
      ]
        .map(index => preselectedOptions ? preselectedOptions[index]
          || SpecialSelectSelection.Default : SpecialSelectSelection.Default),
    });


  _keyExtractor = (_: SwitchItem[], index: number) => index.toString();

  _selectOptions = (
    position: number,
    index: SpecialSelectSelection,
  ) => this.setState(({ selectedItems }) => ({
    selectedItems: assign(
      selectedItems,
      si => {
        si[position] = index;
        return si;
      },
    ),
  }));

  _testOptionEqual = (a: SwitchItems, b: SwitchItems) => {
    if (!a || !b) {
      return false;
    }
    return a.label === b.label;
  };

  _extractText = (option: SwitchItems) => option.label;

  _onSelection = (position: number) => (
    _: any,
    index: SpecialSelectSelection,
  ) => this._selectOptions(position, index);

  _renderSwitch = ({ item: switchItems, index: position }: ListRenderItemInfo<SwitchItems>) => {

    return (
      <>
        {switchItems.label
        && <Text>
            {switchItems.label}
          </Text>
        }

        <SegmentedControls
          tint="#f80046"
          selectedTint="white"
          backTint="#1e2126"
          optionStyle={optionStyle}
          containerStyle={containerStyle}
          options={switchItems.options}
          onSelection={this._onSelection(position)}
          selectedIndex={switchItems.initial}
          extractText={this._extractText}
          testOptionEqual={this._testOptionEqual}
        />
      </>
    );
  };

  _submit = () => this.props.onSubmit(this.state.selectedItems);

  render() {
    return (
      <>
        <Button
          title="Submit"
          onPress={this._submit}
        />

        <FlatList
          data={this.props.switchOptions}
          renderItem={this._renderSwitch}
          keyExtractor={this._keyExtractor}
        />
      </>
    );
  }
}
