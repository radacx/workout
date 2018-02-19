import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { Exercises } from '../containers/Exercises';

export interface IListCallbackProps {
  readonly addExercise: () => void;
  readonly updateExercise: () => void;
}

const List: React.SFC<IListCallbackProps> = ({ addExercise, updateExercise }) =>
  <View>
    <Button
      onPress={addExercise}
      title={'Add random exercise'}
    />
    <Button
      onPress={updateExercise}
      title={'Update'}
    />
    <Exercises />
  </View>;

List.displayName = 'List';

export { List };
