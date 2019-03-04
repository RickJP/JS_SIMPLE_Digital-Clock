

function clock() {
    const fullDate = new Date();

    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();


    hours < 10 ? hours += '0' : null;
    mins < 10 ? mins += '0' : null;
    secs < 10 ? secs += '0' : null;

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + mins;
    document.getElementById('second').innerHTML = ":" + secs;
}

setInterval(clock, 100);