import * as React from 'react';
import { View } from 'react-native';
import { List } from '../containers/List';
import { styles } from '../constants/styles';
export class MainApp extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(List, null)));
    }
}
MainApp.displayName = 'MainApp';
//# sourceMappingURL=E:/JavaScript/workout/components/MainApp.js.map