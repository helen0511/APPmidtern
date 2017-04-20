import React, { Component } from 'react';
import { ScrollView, Image, Linking, StyleSheet } from 'react-native';
import { List, ListItem, Button, Icon, Text, Tile } from 'react-native-elements';

 const Change = (props) => {
    const { title,
      artist,
      price,
      url,
      image,
      descriptions
  } = props.navigation.state.params;


    return (
      <ScrollView style={{ backgroundColor: '#4682b4' }}>
        <Image
          source={require('../assets/pic.png')}
          style={{ left: 60, top: 10 }}

        />
        <List>
          <ListItem
            title="Album"
          />
          <ListItem
            title="Use Cemera"
          />
        </List>
      </ScrollView>
    );
  };

export default Change;