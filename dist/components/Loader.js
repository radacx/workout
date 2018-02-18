import * as React from 'react';
import { Text } from 'react-native';
export class Loader extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }
    componentDidMount() {
        this.intervalId = setInterval(() => this.setState(prevState => ({
            counter: prevState.counter + 1,
        })), 1500);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        return (React.createElement(Text, null,
            "Loading...",
            this.state.counter));
    }
}
//# sourceMappingURL=E:/JavaScript/workout/components/Loader.js.map