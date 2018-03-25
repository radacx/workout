import * as React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { styles } from '../../constants/styles';
import { NavigationManager } from './ExercisesList';
import { getNavigationHelperForComponent } from '../../utils/getNavigationHelperForComponent';
import { componentsWithNavigationProps } from '../../utils/componentsWithNavigationProps';
import { Guid } from '../../models/Guid';

export interface ExerciseDataProps {
  name: string;
  id: Guid;
}

type Props = Readonly<ExerciseDataProps>;

export class Exercise extends React.PureComponent<Props> {
  static displayName = 'Exercise';

  _navigateToExerciseForm = () => {
    const helper = getNavigationHelperForComponent(
      componentsWithNavigationProps.ExerciseForm);

    const params = helper.createNavParams({
      passProps: {
        id: this.props.id,
      },
    });

    NavigationManager.push(params);
  };

  render() {
    return (
      <View>
        <Text style={styles.exercise}>
          {this.props.name}
        </Text>

        <Button
          title="View details"
          onPress={this._navigateToExerciseForm}
        />
      </View>
    );
  }
}
