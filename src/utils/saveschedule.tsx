import AsyncStorage from '@react-native-async-storage/async-storage';

function saveSchedule(link) {

  const storeData = async () => {
      try {
        await AsyncStorage.setItem('scheduleKey', link);
      } catch (e) {
        console.log("storing failed")
      }
    };
  storeData()
}

export default saveSchedule
