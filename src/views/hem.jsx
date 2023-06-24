import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Schema from './schema';
var tider = "1100"

const Stack = createNativeStackNavigator();

const Hem = ({}) => {
   
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