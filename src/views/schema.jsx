import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import getschedule from "../utils/getschedule"
import { useState, useEffect,  } from "react";
var i = 0;
var iPlus = 1
var laddat = false
var scheduleEvents = []
const Schema = ({}) => {
    const [events, setEvents] = useState([])
    
    if (!laddat) {
        var link = "https://cloud.timeedit.net/umu/web/public1/ri6w6X3033ZZY1Qv01030311y0YX0579X71QX12Q9Y737X35X8373b8Z30Q2eXuQ06Zn76701.ics"
        getschedule(link, setEvents)
        laddat = true
    } else {
         
        for (i = 0; i < sessionStorage.length; i++){

            scheduleEvents[i] = sessionStorage.getItem("Date" + iPlus)
            
            iPlus++
            
            
        }
        return (
           <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <ol>
                    {scheduleEvents.map(
                        scheduleEvents=> (
                            <li key={scheduleEvents}>{scheduleEvents}</li>
                        ))}
                    </ol>
                </ScrollView>
            </SafeAreaView> 


        ) 
        
        
    }
    
    
    
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });


export default Schema

