import AsyncStorage from '@react-native-async-storage/async-storage';




function saveSchedule(link) {

  const storeData = async () => {
      try {
        await AsyncStorage.setItem('scheduleKey', JSON.stringify(link));
      } catch (e) {
        console.log("storing failed")
      }
    };
  storeData()
}

export default saveSchedule
