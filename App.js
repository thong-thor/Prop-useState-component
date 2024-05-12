import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { Button} from 'react-native';



const Guestion = (props) => {
  const [name, setName]=useState();
  const [classroom, setClassroom]=useState();
  return (
    <View style={{width:200}}>
      <Text style={{textAlign:'center',fontWeight:'600',fontSize:24}}>My information</Text>
      <Text>Hello, What's your name?</Text>
      <Text>My name is:  <Text style={{textDecorationLine:'underline'}}>{name}</Text> </Text>
      <Text>What is your classroom?</Text>
      <Text>My classroom is:  <Text style={{textDecorationLine:'underline'}}>{classroom}</Text></Text>
      <Text style={styles.Button}>
        <Button 
        title='Answer'
        onPress={()=>{
          setName(props.name),
          setClassroom(props.classroom)
        }}
        />
      </Text>
    </View>
  );
};

const Answer = () => {
  alert("Click buttion to answer the question")
  return (
    <View style={styles.container}>
      <Guestion name="thong thor" classroom="2CW2" />
    </View>
  );
};

export default Answer;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Button:{
    top:10,
  }
});
