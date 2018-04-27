import PropTypes from 'prop-types';
import * as React from 'react';
import {
  Button,
  Text,
} from 'react-native';
import { styles } from '../../_shared/constants/styles';
import { NavigationManager } from './ExercisesApp';
import { getNavigationHelperForComponent } from '../../../navigation/getNavigationHelperForComponent';
import { componentsWithNavigationProps } from '../../../navigation/componentsWithNavigationProps';
import { Uuid } from '../../_types/Uuid';
import { Validation } from '../../_types/validation/Validation';

export interface ExerciseDataProps {
  readonly name: string;
  readonly id: Uuid;
}

type Props = ExerciseDataProps;

export class Exercise extends React.PureComponent<Props> {
  static displayName = 'Exercise';

  static propTypes: Validation<Props> = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  _navigateToExerciseForm = () => {
    const helper = getNavigationHelperForComponent(componentsWithNavigationProps.ExerciseForm);

    const params = helper.createNavParams({
      passProps: { id: this.props.id },
    });

    NavigationManager.push(params);
  };

  render() {
    return (
      <>
        <Text style={styles.exercise}>
          {this.props.name}
        </Text>

        <Button
          title="View details"
          onPress={this._navigateToExerciseForm}
        />
      </>
    );
  }
}
