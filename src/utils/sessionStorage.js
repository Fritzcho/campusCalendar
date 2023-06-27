function sessionStore(schedule){
    
    var i = 0;
    var dateNumb = 1;
    
    for (i = 0; i < schedule.length; i++) {
            sessionStorage.setItem("Date"+ dateNumb++, schedule[i].date + " " + schedule[i].title)
    } 

}

export default sessionStore