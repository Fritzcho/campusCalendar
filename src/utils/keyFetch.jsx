// keyFetch.jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

const keyFetch = (callback) => {
  AsyncStorage.getItem('scheduleKey')
    .then((value) => {
      if (value !== null) {
        if (typeof callback === 'function') {
          callback(value);
        } else {
          console.log('Callback is not a function');
        }
      } else {
        console.log('The given key does not exist');
      }
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

export default keyFetch;
