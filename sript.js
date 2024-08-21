let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');


function displayTime(){

    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    hr.style.transform=`rotate(${30*h+m/2}deg)`;
    min.style.transform=`rotate(${6*m}deg)`;
    sec.style.transform=`rotate(${6*s}deg)`;

}
setInterval(displayTime,1000);