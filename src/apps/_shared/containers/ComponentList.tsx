import { IStore } from '../store/IStore';
import {
  ComponentList as ComponentListComponent,
  ComponentListDataProps,
  ComponentListOwnProps,
} from '../components/ComponentList';
import {
  ComponentClass,
  connect,
} from 'react-redux';
import { HomogenousObject } from '../../_types/HomogenousObject';
import { HasId } from '../../_types/HasId';

type Props = ComponentListOwnProps & {
  readonly getItemsFromState: (state: IStore) => HomogenousObject<HasId>;
};

const mapStateToProps = (state: IStore, { getItemsFromState }: Props): ComponentListDataProps => ({
  ids: Object.keys(getItemsFromState(state)),
});

export const ComponentList: ComponentClass<Props> = connect(mapStateToProps)(
  ComponentListComponent);
