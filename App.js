import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Picker } from 'react-native';
import { Constants } from 'expo';
import { Rating, Button, Slider } from 'react-native-elements';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {CheckBox} from 'react-native-check-box';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


export default class Test extends Component {

  constructor(props){
    super(props);
    this.state ={
      initialRate: null,
      rating: null,
      age: null,
      size: null,
      latLon: null,
      image: null
    };
    this.setRating = this.setRating.bind(this);
    this.setAge = this.setAge.bind(this);
    this.setSize = this.setSize.bind(this);
    //this.setAge = this.setAge.bind(this);

  }

  setAge(index, value){
    this.setState({age: value})
  }

  setRating(value) {
    this.setState({rating: value})
  }


  setSize(index, value) {
    this.setState({size: value})
  }

  saveTurd() {
    const turd = {
      age: this.state.age,
      size: this.state.size,
      rating: this.state.rating,
      latLon: this.state.latLon,
      image: this.state.image
    }

    console.log('saveTurd', turd);
    // create a payload to post to REST
  }

  render() {
    return (
      <View style={styles.container}>
        <Rating
          startingValue={this.state.initialRate}
          fractions={1}
          type='heart'
          ratingCount={5}
          onFinishRating={this.setRating}
          style={{ paddingVertical: 10 }}
        />
      <View>
        <RadioGroup style={{flexDirection: 'row'}} onSelect={(index, value) => this.setAge(index, value)}>
          <RadioButton value={'steaming'} >
            <Text>Steaming</Text>
          </RadioButton>
          <RadioButton value={'recent'}>
            <Text>Recent</Text>
          </RadioButton>
          <RadioButton value={'crusty'}>
            <Text>Crusty</Text>
          </RadioButton>
        </RadioGroup>

        <RadioGroup style={{flexDirection: 'row'}} onSelect={(index, value) => this.setSize(index, value)}>
          <RadioButton value={'shihtzu'} >
            <Text>Shitzu</Text>
          </RadioButton>
          <RadioButton value={'labradore'}>
            <Text>Labrador</Text>
          </RadioButton>
          <RadioButton value={'dalmantion'}>
            <Text>Dalmnation</Text>
          </RadioButton>
        </RadioGroup>
      </View>

      <Button
        onPress={() => this.saveTurd()}
        title="Save Turd"
      />
      <Text>Rating: {this.state.rating}</Text>
      <Text>Age: {this.state.age}</Text>
      <Text>Size: {this.state.size}</Text>


    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
 flex: 1,
 paddingTop: 22
},
item: {
  padding: 10,
  fontSize: 18,
  height: 44,
},
});
