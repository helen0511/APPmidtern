import React ,{Component } from 'react';

import { ScrollView, Linking ,View,Image } from 'react-native';
import { Button, Text, PricingCard, Tile } from 'react-native-elements';

// Make a component
class Details extends Component {
  render() {
    const {card,back,title } = styles;
    return (
      <ScrollView style={back}>
      <View style={card}> 
        <Text style={title} > Welcome To BBC Learning </Text>
        <Image style={logo} source={require('../assets/add.png')}/>
           </View>
       
      </ScrollView>
    );
  }
};
const styles = {
  back:{
    backgroundColor:'#4682b4'
  },
  card:{
    backgroundColor:'#dae6f0',
    width:330,
    height:515,
    borderRadius:10,
    top:20,
    left:22
  },
  title:{
    color:'#4682b4',
    fontSize:20,
    top:20,
    fontWeight:'bold',
    textAlign:'center'
  }
}

export default Details;
