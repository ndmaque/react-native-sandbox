import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Rating, Button, CheckBox, Slider } from 'react-native-elements';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default class Test extends Component {

  constructor(props){
    super(props);
    this.state ={
      initialRate: 2,
      myRate: 1,
      buttonVal: 'button default',
      'checked': true,
      'value': 21
    };
    this.setRate = this.setRate.bind(this);
    this.setButton = this.setButton.bind(this);
  }

  setRate(newRate) {
    this.setState({myRate: newRate})
  }

  setButton(title) {
    console.log('button pressed ');
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
          startingValue={this.state.initialRate}
          fractions={1}
          type='heart'
          ratingCount={5}
          onFinishRating={this.setRate}
          style={{ paddingVertical: 10 }}
        />


        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
          <Slider
            value={this.state.value}
            onValueChange={(value) => this.setState({value})} />

          <Text>Value: {this.state.value}</Text>
        </View>
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
