import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Rating, Button } from 'react-native-elements';

export default class Test extends Component {

  constructor(props){
    super(props);
    this.state ={ myRate: 1, buttonVal: 'button default'};
    this.setRate = this.setRate.bind(this);
    this.setButton = this.setButton.bind(this);
  }

  setRate(newRate) {
    this.setState({myRate: newRate})
  }

  setButton(title) {
    console.log('button pressed');
    this.setState({buttonVal: 'button was pressed'})
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='BUTTON'
            onPress={this.setButton}
        />
      <Text>myRate: {this.state.myRate}</Text>
        <Text>buttonVal: {this.state.buttonVal}</Text>

        <Rating
          showRating

          onFinishRating={this.setRate}
          style={{ paddingVertical: 10 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  tite: {
    fontSize: 24,
    textAlign: 'center',
    color: '#34495e'
  },
  paragraph: {
    margin: 10,
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
});
