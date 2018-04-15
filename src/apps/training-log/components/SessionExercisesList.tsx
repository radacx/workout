import PropTypes from 'prop-types';
import * as React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { SessionExercises } from './SessionExercises';
import { SessionExercise } from '../../_types/data/SessionExercise';
import { NavigationManager } from './TrainingLogApp';
import { getNavigationHelperForComponent } from '../../../navigation/getNavigationHelperForComponent';
import { Uuid } from '../../_types/Uuid';
import { componentsWithNavigationProps } from '../../../navigation/componentsWithNavigationProps';
import { Validation } from '../../_types/validation/Validation';

export type SessionExercisesListOwnProps = {
  readonly sessionId: Uuid;
};

export type SessionExercisesListDataProps = {
  readonly exercises: SessionExercise[];
};

type Props = SessionExercisesListOwnProps
  & SessionExercisesListDataProps;

export class SessionExercisesList extends React.PureComponent<Props> {
  static displayName = 'SessionExercisesList';

  static propTypes: Validation<Props> = {
    exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
    sessionId: PropTypes.string.isRequired,
  };

  _navigateToNewExerciseForm = () => {
    const helper = getNavigationHelperForComponent(componentsWithNavigationProps.SessionExerciseForm);

    const params = helper.createNavParams({
      navigatorStyle: {
        screenBackgroundColor: 'white',
      },
      passProps: {
        sessionId: this.props.sessionId,
      },
    });

    NavigationManager.showModal(params);
  };

  render() {
    return (
      <View>
        <Button
          title="Add exercise"
          onPress={this._navigateToNewExerciseForm}
        />

        <SessionExercises exercises={this.props.exercises}/>
      </View>
    );
  }
}
