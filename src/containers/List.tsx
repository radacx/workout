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
import { MuscleGroup } from '../models/enums/MuscleGroup';


const mapDispatchToProps = (dispatch: Dispatch<IAppState>): IListCallbackProps => ({
  goToNewExerciseForm: () => dispatch(NavigationActions.navigate({ routeName: 'MultiSelect',
      params: {
        options: Object.keys(MuscleGroup)
          .map((k: any) => MuscleGroup[ k ]),
      },
    })),
});

export const List: React.ComponentClass = connect(
  undefined,
  mapDispatchToProps,
)(ListComponent);
