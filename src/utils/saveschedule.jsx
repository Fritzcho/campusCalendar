import AsyncStorage from '@react-native-async-storage/async-storage';
import getschedule from './getschedule';
import { useEffect, useState } from 'react';




function saveSchedule(link) {
    const key = {
        name: 'Tom',
        age: 20
    }


    
    const storeData = async () => {
        try {
            
          await AsyncStorage.setItem('scheduleKey', JSON.stringify(key));
        } catch (e) {
          console.log("storing failed")
        }
      };
      storeData(link)
      
      
      const getKey = async () => {
        try {
            const currentUser = await AsyncStorage.getItem('scheduleKey')
            

            return currentUser
        } catch (error) {
          // Error retrieving data
        }
      };
     
      console.log(getKey())
      
  
      

}

export default saveSchedule
