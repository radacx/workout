import PropTypes from 'prop-types';
import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { Uuid } from '../../_types/Uuid';
import { HasId } from '../../_types/HasId';
import { Validation } from '../../_types/validation/Validation';

export type ComponentListDataProps = {
  readonly ids: Uuid[];
};

export type ComponentListOwnProps = {
  readonly keyExtractor?: (item: Uuid) => string;
  readonly render: React.ComponentType<HasId>;
};

type Props = ComponentListDataProps & ComponentListOwnProps;

export class ComponentList extends React.PureComponent<Props> {
  static displayName = 'ComponentList';

  static propTypes: Validation<Props> = {
    ids: PropTypes.arrayOf(PropTypes.string).isRequired,
    render: PropTypes.func.isRequired,
    keyExtractor: PropTypes.func,
  };

  static defaultProps: Partial<Props> = {
    keyExtractor: (id: Uuid) => id,
  };

  _renderItem = ({ item: id }: ListRenderItemInfo<Uuid>) =>
    <this.props.render id={id}/>;

  render() {
    const { ids, keyExtractor } = this.props;

    return (
      <FlatList
        data={ids}
        renderItem={this._renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}
