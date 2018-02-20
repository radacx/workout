import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { Exercises } from '../containers/Exercises';
import { styles } from '../constants/styles';

export interface IListCallbackProps {
  goToNewExerciseForm: () => void;
}

const List: React.SFC<IListCallbackProps> = ({ goToNewExerciseForm }) =>
  <View style={styles.container} >
    <Button
      onPress={goToNewExerciseForm}
      title={'Add new exercise'}
    />
    <Exercises />
  </View>;

List.displayName = 'List';

export { List };
