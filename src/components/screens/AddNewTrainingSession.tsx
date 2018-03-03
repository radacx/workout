import {
  View,
  TextInput,
  Text,
  Button,
} from 'react-native';
import * as React from 'react';
import { INavigationProps } from '../../models/interfaces/INavigationProps';
import { ISessionExercise } from '../../models/interfaces/ITrainingSession';
import { IHomogenousObject } from '../../models/interfaces/IHomogenousObject';

interface IAddNewTrainingSessionState {
  readonly begin: Date;
  readonly end: Date;
  readonly bodyweight?: number;
  readonly exercises: IHomogenousObject<ISessionExercise>;
}

export class AddNewTrainingSession extends React.PureComponent<any, IAddNewTrainingSessionState> {
  static NavigationProps: INavigationProps = {
    screen: 'AddNewTrainingSession',
    title: 'New training session',
  };

  render() {
    return (
      <View>
        <Text>
          Bodyweight:
        </Text>
        <TextInput />
        <Button
          title="add"
          onPress={() => console.log('lul')}
        />
      </View>
    );
  }
}
