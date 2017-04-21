import React, { Component } from 'react';
import { ScrollView, Image, Linking, StyleSheet } from 'react-native';
import { List, ListItem, Button, Icon, Text, Tile,View } from 'react-native-elements';

 const Logout = () => {
   const { welcome,horizontal,texts,box,block } = styles;
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
      <View style={styles.block}>
        <View style={styles.horizontal}>
          <Text style={styles.texts}>Username:</Text>
          <View style={styles.box}>
          </View>
        </View>
      </View>
      <View style={styles.block}>
        <View style={styles.horizontal}>
          <Text style={styles.texts}>Password:</Text>
          <View style={styles.box}>            
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

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
      left: 15, top: 10,
      color: '#4682b4',
      fontSize: 16,
      fontWeight: 'bold',
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
    },
}
export default Logout;
