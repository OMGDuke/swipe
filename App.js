import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View >
        <Image source={{uri: 'http://geekycentral.com/wp-content/uploads/2017/09/react-native.png'}}
               style={styles.image} ></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    marginTop: 100,
    marginBottom: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8
  },
  image: {
    flex: 1,
  }
});
