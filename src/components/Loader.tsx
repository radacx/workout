import * as React from 'react';
import { Text } from 'react-native';

interface ILoaderState {
  counter: number;
}

export class Loader extends React.PureComponent<{}, ILoaderState> {
  intervalId: number;

  constructor(props: any) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState(prevState => ({
        counter: prevState.counter + 1,
      })),
      1500,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <Text>
        Loading...{this.state.counter}
      </Text>
    );
  }
}
