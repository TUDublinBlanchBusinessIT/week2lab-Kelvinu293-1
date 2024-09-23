import {View, TextView, Text, StyleSheet} from 'react-native';
import React, (userState) from 'react';

const styles = StyleSheet.create({

  
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function App(){
  const {fullname, setFullname] = userState("Kelvin")

  return(
    <View>
      <TextInput placeholder>Hello, World</Text>
    </View>
  )
};
