import { IAppState } from '../models/state/IAppState';
import {
  ComponentList as ComponentListComponent,
  IComponentListDataProps,
  IComponentListOwnProps,
} from '../components/ComponentList';
import {
  ComponentClass,
  connect,
} from 'react-redux';
import { IHomogenousObject } from '../models/interfaces/IHomogenousObject';
import { IHasId } from '../models/interfaces/IHasId';

interface IComponentListContainerProps extends IComponentListOwnProps {
  getIdsFromState: (state: IAppState) => IHomogenousObject<IHasId>;
}

const mapStateToProps = (state: IAppState, { getIdsFromState }: IComponentListContainerProps): IComponentListDataProps => ({
  ids: Object.keys(getIdsFromState(state)),
});

export const ComponentList: ComponentClass<IComponentListContainerProps> = connect(
  mapStateToProps,
)(ComponentListComponent);
