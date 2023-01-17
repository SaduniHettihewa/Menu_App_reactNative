import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

const [name , setName] =useState("name");



  return (
    <View style={styles.container}>
      <Text>Enter your Name :</Text>
      <TextInput style={styles.textInput} 
                  placeholder ='e.g. John Doe'
                  onChangeText={(val)=>setName(val)}  />
    
       <Text>Hii {name}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heder:{
    backgroundColor: 'pink',
    padding:20
  },
  boldText:{
    fontWeight: 'bold',
  },
  textInput:{
    borderWidth:1,
    borderColor: 'black',
    padding:8,
    margin:10,
    width:200
  }
});
