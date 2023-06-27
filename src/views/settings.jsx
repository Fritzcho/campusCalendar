import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import saveSchedule from '../utils/saveschedule';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = ({}) => {
  const [value, setValue] = useState(null);
  const [text, setText] = useState('');
  const onPress = () => {
    if (text.indexOf(".ics") > 0 && text.indexOf("https://") === 0 ){
      saveSchedule(text)
      alert("Schedule Link Added")
      
    } else  {
      alert("Invalid Schedule Link")
    }
    
  }

  function testFetch() {
    const getKey = async () => {
      var key = "";
      try {
        key = await AsyncStorage.getItem('scheduleKey');
      } catch (error) {
        console.log("The given key does not exist")
      }
      return key;
    };
  
    getKey().then(data => {
      setValue(data)
    })

    console.log(value)
  }
  
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
  });
  

export default Settings