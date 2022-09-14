import React, { useState } from 'react';

import { Keyboard, KeyboardAvoidingView, Platform, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  const [ task, setTask] = useState ();
  const [ taskItems, setTaskItems] = useState ([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
      setTaskItems([...taskItems, task])
      setTask(null);
 }
/* function creeren om te verwijderen na klik  */

const completeTask =(index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index,1);
  setTaskItems(itemsCopy); 

}
  return (
    <View style={styles.container}>
      {/* To do van vandaag*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks</Text>
        <Text style={styles.sectionDescription}>Get shit done!</Text>
        
        <ScrollView>
        <View styles={styles.items}>
          {/* hieronder komen al de taken gelist*/}
          {
            taskItems.map ((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={ () => completeTask (index) }>
                   <Task text= {item} />

                </TouchableOpacity>
              )
            })
          }
        </View>
        </ScrollView>
      </View>

      {/* Voeg een nieuwe task toe */}
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} 
        value={task} onChangeText = {text => setTask(text)}/>

        <TouchableOpacity onPress={ () => handleAddTask()} >
          <View style={styles.addWrapper}>
          <Image styles={styles.tinyLogo} source={require('./assets/plus.png')}></Image>

            {/* <Text styles={styles.addText}>+</Text> */}
             </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
 
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  sectionDescription: {
    marginBottom: 30,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height:2,
    },
    elevation: 2,
    
    
    
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,

  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height:2,
    },
    elevation: 2,
    
  },
  addText: {},
  tinyLogo: {

  },
});
