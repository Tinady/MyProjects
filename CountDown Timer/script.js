const  newYears= '11 Sep 2023';
const days =document.getElementById('days');
const hours =document.getElementById('hours');
const mins=document.getElementById('mins');
const seconds=document.getElementById('seconds');


function countdown()
{
    const newyearsDate =new Date(newYears);
    const currentDate = new Date
    const Tseconds=(newyearsDate-currentDate)/1000


   
    const Days= Math.floor(Tseconds/3600/24);
    const Hours=  Math.floor(Tseconds/3600)%24;
    const Minutes=Math.floor(Tseconds/60)%60;
    const Seconds=Math.floor(Tseconds)%60;


    days.innerHTML=Days;
   hours.innerHTML=Format(Hours);
    mins.innerHTML=Format(Minutes);
    seconds.innerHTML=Format(Seconds);
   


}

function Format(time){
    return time<10 ?('0'+(time)):time;
}

//initial call
countdown()
setInterval(countdown, 1000);

