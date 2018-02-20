import {
  View,
  Button,
} from 'react-native';
import React from 'react';

export interface INewExerciseFormCallbackProps {
  addExercise: () => void;
}


const NewExerciseForm: React.SFC<INewExerciseFormCallbackProps> = ({ addExercise }) =>
  <View>
    <Button
      onPress={addExercise}
      title={'Add random'}
    />
  </View>;

NewExerciseForm.displayName = 'NewExerciseForm';

export { NewExerciseForm };
