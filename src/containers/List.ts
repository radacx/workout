import {
  connect,
  Dispatch,
} from 'react-redux';
import { IAppState } from '../models/state/IAppState';
import * as React from 'react';
import {
  IListCallbackProps,
  List as ListComponent,
} from '../components/List';
import { NavigationActions } from 'react-navigation';


const mapDispatchToProps = (dispatch: Dispatch<IAppState>): IListCallbackProps => ({
  goToNewExerciseForm: () => dispatch(NavigationActions.navigate({ routeName: 'AddNew' })),
});

export const List: React.ComponentClass = connect(
  undefined,
  mapDispatchToProps,
)(ListComponent);
