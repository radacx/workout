import { AppState } from '../models/state/AppState';
import {
  ComponentList as ComponentListComponent,
  ComponentListDataProps,
  ComponentListOwnProps,
} from '../components/ComponentList';
import {
  ComponentClass,
  connect,
} from 'react-redux';
import { HomogenousObject } from '../models/HomogenousObject';
import { HasId } from '../models/HasId';

type Props = Readonly<ComponentListOwnProps
  & {
  getIdsFromState: (state: AppState) => HomogenousObject<HasId>;
}>;

const mapStateToProps = (
  state: AppState,
  { getIdsFromState }: Props,
): ComponentListDataProps => ({
  ids: Object.keys(getIdsFromState(state)),
});

export const ComponentList: ComponentClass<Props> = connect(
  mapStateToProps,
)(ComponentListComponent);
