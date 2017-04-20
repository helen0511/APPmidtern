import React, { Component } from 'react';
import { ScrollView, Image, Linking, StyleSheet } from 'react-native';
import { List, ListItem, Button, Icon, Text, Tile } from 'react-native-elements';

 const Logout = (props) => {
    const { title,
      artist,
      price,
      url,
      image,
      descriptions
  } = props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <Text style={styles.welcome}>
          to
        </Text>
        <Text style={styles.welcome}>
          Learn English
        </Text>
      </View>
    );
  }


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dae6f0',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
};

export default Logout;
