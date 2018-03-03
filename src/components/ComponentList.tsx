import * as React from 'react';
import { FlatList } from 'react-native';
import { Guid } from '../models/Guid';
import { IHasId } from '../models/interfaces/IHasId';

export interface IComponentListDataProps {
  readonly ids: Guid[];
}

export interface IComponentListOwnProps {
  readonly keyExtractor?: (item: Guid) => string;
  readonly component: React.ComponentType<IHasId>;
}

type ComponentListProps = IComponentListDataProps & IComponentListOwnProps;

const defaultProps = {
  keyExtractor: (id: Guid) => id,
};

const ComponentList: React.SFC<ComponentListProps> = ({ ids, keyExtractor, component: Component }) =>
  <FlatList
    data={ids}
    renderItem={({ item: id }) => <Component id={id} />}
    keyExtractor={keyExtractor}
  />;

ComponentList.displayName = 'ComponentList';
ComponentList.defaultProps = defaultProps;

export { ComponentList };
