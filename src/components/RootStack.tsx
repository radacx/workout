import {
  addNavigationHelpers,
  NavigationActions,
  NavigationProp,
  StackNavigator,
} from 'react-navigation';
import { List } from '../containers/List';
import { NewExerciseForm } from '../containers/NewExerciseForm';
import * as React from 'react';
import {
  connect,
} from 'react-redux';
import { IAppState } from '../models/state/IAppState';
import { MultiSelect } from './MultiSelect';
import { addListener } from '../utils/configureStore';

export const Stack = StackNavigator(
  {
    Exercises: {
      screen: List,
    },
    AddNew: {
      screen: NewExerciseForm,
    },
    MultiSelect: {
      screen: MultiSelect,
    }
  },
  {
    initialRouteName: 'AddNew',
  },
);

const RootStack: React.SFC<NavigationProp<any, any>> = navigation =>
  <Stack navigation={addNavigationHelpers(navigation)} />;

const mapStateToProps = ({ nav }: IAppState): NavigationProp<any, any> & { addListener: any } => ({
  state: nav,
  dispatch: () => true,
  addListener,
});

export const AppNavigation: React.ComponentClass = connect(
  mapStateToProps,
)(RootStack);

export const initialState = Stack.router.getStateForAction(NavigationActions.navigate({ routeName: 'Exercises' }));
