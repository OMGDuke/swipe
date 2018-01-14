import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const profileImage = 'http://geekycentral.com/wp-content/uploads/2017/09/react-native.png'

export default class App extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image source={{uri: profileImage}}
               style={styles.image} />
        <View style={styles.blurb}>
          <Text style={styles.name}>
            Paul, 28
          </Text>
          <Text style={styles.job}>
            Developer
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
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
  },
  blurb: {
    margin: 20,
  },
  name: {
    fontSize: 20,
  },
  job: {
    fontSize: 16
  }
});
