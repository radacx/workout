import * as React from 'react';
import { MainApp } from './components/MainApp';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './utils/configureStore';
import { Loader } from './components/Loader';
const { store, persistor, } = configureStore();
export default class App extends React.PureComponent {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(PersistGate, { persistor: persistor, loading: React.createElement(Loader, null) },
                React.createElement(MainApp, null))));
    }
}
//# sourceMappingURL=E:/JavaScript/workout/App.js.map