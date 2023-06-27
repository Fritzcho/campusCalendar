
import sessionStore from "./sessionStorage";

function getschedule(link, setEvents){
  
    var events = []
    var request = new XMLHttpRequest();


    
    request.open(
      "GET",
      link,
      true
    );
    
    request.send(null);
    request.onreadystatechange = function() {

      if (request.readyState === 4 && request.status === 200) {
        var type = request.getResponseHeader("Content-Type");
        if (type.indexOf("text") !== 1) {
          var lines = request.responseText.split("\n");
          
          var events_i = 0;
          var i = 0;
          for (i = 0; i < lines.length; i++) {
            if (lines[i].includes('DTSTART')) {
              var date = lines[i].split(":");

              events[events_i] = [events_i]
              events[events_i]["date"] = date[1];
            }
            else if (lines[i].includes('SUMMARY')) {
              var title = lines[i].split(":");
              events[events_i]["title"] = title[1];
            }
            else if (lines[i].includes('END:VEVENT')) {
              events_i++;
            }
            
          }
          
          sessionStore(events)
        }
      } 
    };
    

}

export default getschedule