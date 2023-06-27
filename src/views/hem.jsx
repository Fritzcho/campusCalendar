import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Schema from './schema';
import getschedule from '../utils/getschedule';
import keyFetch from '../utils/keyFetch';
var tider = "1100"


const Stack = createNativeStackNavigator();


const Hem = ({}) => {
    // request Schedule callback on app start, add the schedule fetch when local Storage can be s
    //var link = "https://cloud.timeedit.net/umu/web/public1/ri6w6X3033ZZY1Qv01030311y0YX0579X71QX12Q9Y737X35X8373b8Z30Q2eXuQ06Zn76701.ics"
    //getschedule(FetchKey)
    // could use if (key != undefined){} to prevent code running, lear more of abortController 

    getschedule("https://cloud.timeedit.net/umu/web/public1/ri6w6X3033ZZY1Qv01030311y0YX0579X71QX12Q9Y737X35X8373b8Z30Q2eXuQ06Zn76701.ics")

    return (
        <Stack.Navigator>
            <Stack.Screen name = "hemma" component = {Homecomp} options={({ route }) => ({
            tabBarShowLabel: false, headerShown: false})}/>
            <Stack.Screen name = "Schema" component = {Schema}/>
        </Stack.Navigator>
    );

    
    
}


const Homecomp = ({navigation}) => {
    return (
        <View style={styles.container}> 
                <TouchableHighlight onPress={()=>navigation.navigate("Schema")}>
                    <View style={styles.button}>
                    <Text>{tider}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
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

  });
  

export default Hem