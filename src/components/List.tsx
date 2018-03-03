import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { styles } from '../constants/styles';
import { Navigator } from 'react-native-navigation';
import { ComponentList } from '../containers/ComponentList';
import { Exercise } from '../containers/Exercise';

export interface IListCallbackProps {
  goToNewExerciseForm: () => void;
}

interface IListProps extends IListCallbackProps {
  readonly navigator: Navigator;
}

const List: React.SFC<IListProps> = ({ navigator }) =>
  <View style={styles.container}>
    <Button
      onPress={() => {
        navigator.push({
          screen: 'MultiSelect',
          title: 'MultiSelect',
          passProps: {
            /*options: Object.keys(MuscleGroup)
             .map((k: any) => MuscleGroup[ k ]),*/
            options: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
            ].map(num => `Option ${num}`),
          },
        });
      }}
      title={'Add new exercise'}
    />
    <ComponentList
      getIdsFromState={state => state.exercises}
      component={Exercise}
    />
  </View>;

List.displayName = 'List';

export { List };
