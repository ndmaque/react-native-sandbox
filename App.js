import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { Rating } from 'react-native-elements';

export default class Test extends Component {

 constructor(props){
    super(props);
    this.state ={ myRating: 1};

 }

 _ratingCompleted(rating) {
   console.log("Rating is: " + rating)
   this.setState({
     myRating: rating
   });
  //this.state.myRating = rating;
 }

  render() {


    return (

      <View style={styles.container}>
        <Text>Stuff {this.state.myRating}</Text>
        <Rating
          showRating
          onFinishRating={this._ratingCompleted}
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
