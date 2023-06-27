import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect,  } from "react";

function keyFetch() {
    const [value, setValue] = useState(null);
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

    return value

    
  }

  export default keyFetch