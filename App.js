import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

const [person , setName] =useState([
  {name: 'John',key:1},
  {name: 'Lisa',key:2},
  {name: 'Nuz',key:3},
  {name: 'Biza',key:4},
  {name: 'Suiz',key:5},
  {name: 'Dinee',key:6},
  {name: 'Dinee',key:7},
  {name: 'Dinee',key:8},
  {name: 'Biza',key:9},
  {name: 'Biza',key:10},



]);



  return (
    <View style={styles.container}>
        <ScrollView>

    {person.map((items)=>{
      return(
        <View  key={items.key }>
        <Text style={styles.slide}> {items.name}</Text>  
        </View>

      )
    })}
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    paddingTop:50
   
  },
  slide:{
      backgroundColor:'pink',
      margin:10,
      alignContent: 'center',
      padding:30
  }
 
});
