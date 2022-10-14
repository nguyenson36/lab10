function Time() {
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
    

    // update hour,minute,second;
    // if less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);

    //day fomat
    var week = "";
    if(day==0) {
        week = "Monday";
    }
    if(day==1) {
        week = "Tuesday";
    }
    if(day==2) {
        week = "Wednesday";
    }
    if(day==3) {
        week = "Thurday";
    }
    if(day==4) {
        week = "Friday";
    }
    if(day==5) {
        week = "Saturday";
    }
    if(day==6) {
        week = "Sunday";
    }

    // add time element
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
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
/* greating logic */
setTimeout(() => {
    var x = document.getElementById("greating");
    x.style.opacity = "1";
}, 1000)

setTimeout(() => {
    var x = document.getElementById("greating");
    x.style.opacity = "0";
}, 8000)
// x.style.opacity = "0";s




//carousel
$('.carousel').carousel();