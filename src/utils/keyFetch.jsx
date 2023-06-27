import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect,  } from "react";
var fetched = false

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
    
    // Prevents null value from being returned, still need to add abortcontroller to abort request when the call is finished
    if (value != undefined && !fetched) {
      fetched = true
      return value
    }
    

    
  }

  export default keyFetch