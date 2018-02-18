import * as React from 'react';
import { View } from 'react-native';
import { List } from '../containers/List';
import { styles } from '../constants/styles';

export class MainApp extends React.Component {
  static displayName = 'MainApp';

  render() {
    return (
      <View style={styles.container}>
        <List />
      </View>
    );
  }
}
