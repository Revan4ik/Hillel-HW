// alert
var timetowakeup = prompt("wake up in (hh:mm)")
var timetowakeuparr = timetowakeup.split(':').join('')
var time3 = setInterval(clock, 1000);
function clock(){
    var date = new Date();
    var time = date.toLocaleTimeString()
    var time2 = time.split(':').slice(0,-1).join('')
    document.getElementById('block').innerHTML = time
    if(time2 == timetowakeuparr) {
    alert('time to wake up')
    clearInterval(time3);
}
}