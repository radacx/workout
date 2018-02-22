import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { Exercises } from '../containers/Exercises';
import { styles } from '../constants/styles';
import { Navigator } from 'react-native-navigation';
import { MuscleGroup } from '../models/enums/MuscleGroup';

export interface IListCallbackProps {
  goToNewExerciseForm: () => void;
  navigator: Navigator;
}

const List: React.SFC<IListCallbackProps> = ({ navigator }) =>
  <View style={styles.container} >
    <Button
      onPress={() => {
        navigator.push({
          screen: 'MultiSelect',
          title: 'MultiSelect',
          passProps: {
            options: Object.keys(MuscleGroup)
              .map((k: any) => MuscleGroup[ k ]),
          }
        });
      }}
      title={'Add new exercise'}
    />
    <Exercises />
  </View>;

List.displayName = 'List';

export { List };
