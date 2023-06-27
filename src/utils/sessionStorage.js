function sessionStore(schedule) {
    var dateNumb = 1;
  
    for (var i = 0; i < schedule.length; i++) {
      var sessionData = schedule[i];
      var date = sessionData.date ? sessionData.date.trim() : ''; // Check if date property exists
      var title = sessionData.title ? sessionData.title.trim() : ''; // Check if title property exists
  
      sessionStorage.setItem("Date" + dateNumb++, date + " " + title);
    }
  }

export default sessionStore