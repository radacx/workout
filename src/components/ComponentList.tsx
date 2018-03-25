import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { Guid } from '../models/Guid';
import { HasId } from '../models/HasId';

export interface ComponentListDataProps {
  ids: Guid[];
}

export interface ComponentListOwnProps {
  keyExtractor?: (item: Guid) => string;
  component: React.ComponentType<HasId>;
}

type ComponentListProps = Readonly<ComponentListDataProps
  & ComponentListOwnProps>;

export class ComponentList extends React.PureComponent<ComponentListProps> {
  static displayName = 'ComponentList';

  static defaultProps = {
    keyExtractor: (id: Guid) => id,
  };

  _renderItem = ({ item: id }: ListRenderItemInfo<Guid>) =>
    <this.props.component id={id}/>;

  render() {
    const {
      ids,
      keyExtractor,
    } = this.props;

    return (
      <FlatList
        data={ids}
        renderItem={this._renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}
