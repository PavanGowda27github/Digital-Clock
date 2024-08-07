const hourspan=document.getElementById("hour")
const minutespan=document.getElementById('minute')
const secondspan=document.getElementById('second')
const amorpmspan=document.getElementById('amorpm')
function chageTime(){
    const date=new Date()
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
    hourspan.textContent= hour
    minutespan.textContent= minute
    secondspan.textContent= second
    if(hour>=0 && hour<=11){
        amorpm="AM"
    }
    else{
        amorpm="PM"
    }
    amorpmspan.textContent=amorpm

}
setInterval(chageTime,1000)

