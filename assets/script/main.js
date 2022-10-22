function Time() {
    // get time
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    // AM / PM
    var period = "";

    if (hour >=  12) {
        period = "PM";
    }
    else {
        period = "AM";
    }

    // 12h fomat
    if (hour == 0 ) {
        hour = 12;
    }   else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    hour = update(hour);
    minute = update(minute);
    second = update(second);

    //day fomat
    var week = "";
    if(day==0) {
        week = "Sunday";
    }
    if(day==1) {
        week = "Monday";
    }
    if(day==2) {
        week = "Tuesday";
    }
    if(day==3) {
        week = "Wednesday";
    }
    if(day==4) {
        week = "Thurday";
    }
    if(day==5) {
        week = "Friday";
    }
    if(day==6) {
        week = "Saturday";
    }
    console.log(d.getMonth());
    // add time element
    month++;
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period + "\n" + week + " " + date + "/" + month + "/" + year;
    // set timer to 1 sec 1000ms 
    setTimeout(Time,1000);
}   

function update(t) {
    if (t<10) {
        return "0" + t;
    } else {
        return t;
    }
}
Time();



