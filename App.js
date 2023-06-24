import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hem from './src/views/hem';
import Schema from './src/views/schema';
import Bokningar from './src/views/bokningar';
import Settings from './src/views/settings';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarShowLabel: false, headerShown: false})}
            >

          <Tab.Screen name = "Hem" component = {Hem} options={{tabBarIcon:({tintColor})=><Icon name="ios-home" color={tintColor} size={25}/>}}/>
          <Tab.Screen name = "schema" component = {Schema} options={{tabBarIcon:({tintColor})=><Icon name="ios-calendar" color={tintColor} size={25}/>}}/>
          <Tab.Screen name = "bokningar" component = {Bokningar} options={{tabBarIcon:({tintColor})=><Icon name="ios-bookmark-sharp" color={tintColor} size={25}/>}}/>
          <Tab.Screen name = "settings" component = {Settings} options={{tabBarIcon:({tintColor})=><Icon name="ios-settings-sharp" color={tintColor} size={25}/>}}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
  
  
}