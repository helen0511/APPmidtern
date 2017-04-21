import React, { Component } from 'react';
import { ScrollView, Image, Linking, StyleSheet } from 'react-native';
import { List, ListItem, Button, Icon, Text, Tile,View } from 'react-native-elements';

 const Logout = () => {
 //  const { welcome,horizontal,texts,box,block } = styles;
  return (
    <ScrollView style={{ backgroundColor: '#4682b4' }}>
      <Text style={styles.welcome}>
        Welcome
        </Text>
      <Text style={styles.welcome}>
        to
        </Text>
      <Text style={styles.welcome}>
        Learn Englishs
        </Text>
      <Text style={styles.welcome}>
        
        </Text>
        <List>
          <ListItem
            title="Username:"
            hideChevron
          />
          <ListItem
            title="Password:"
            hideChevron
          />
        </List>

    </ScrollView>
  );
};

const styles = {
    block: {
      backgroundColor: '#dae6f0',
      width: 300,
      height: 30,
      borderRadius: 10,
      top: 10,
      left: 10,
      marginTop: 10
    },
    box: {
      backgroundColor: 'write',
      width: 140,
      height: 16,
      top: 7,
      left: 150
    },
    horizontal: {
      flexDirection: 'row',
      flex: 1,
    },
    texts: {
      left: 30, 
      top: 50,
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    welcome: {
      top: 20,
      bottom: 60,
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: 'white',
    },
};
export default Logout;
