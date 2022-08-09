function displayTime(){
    const timenow = new Date();
    
    let hourofDay = timenow.getHours();
    let minutes = timenow.getMinutes();
    let seconds = timenow.getSeconds();
    let weekDay = ["Sunday", "Monday","Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[timenow.getDay()];
    let months = timenow.toLocaleString("default", {month: "long"});
    let year = timenow.getFullYear();
    let period = "AM";

    if (hourofDay > 12){
        hourofDay-= 12;
        period = "PM";
    }
    if (hourofDay === 12){
        hourofDay = 12;
        period = "AM";
    }

    hourofDay = hourofDay < 10 ? "0" + hourofDay : hourofDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hourofDay + ":" + minutes + ":" + seconds + period;
    document.getElementById('Clock').innerHTML = time + " " + today + " " + months + " " + year;
    
}
    

setInterval(displayTime, 1000);