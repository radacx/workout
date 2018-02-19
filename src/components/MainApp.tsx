import * as React from 'react';
import { View } from 'react-native';
import { List } from '../containers/List';
import { styles } from '../constants/styles';

const MainApp: React.SFC = () =>
  <View style={styles.container}>
    <List />
  </View>;

MainApp.displayName = 'MainApp';

export { MainApp };
