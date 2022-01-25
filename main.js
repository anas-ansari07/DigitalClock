setInterval(currentTime, 1000);

function currentTime()
{
	let d = new Date();
	let dayname= d.getDay();
	let month = d.getMonth();
	let year = d.getFullYear();
	let date = d.getDate();
	let hour = d.getHours();
	let min = d.getMinutes();
	let sec = d.getSeconds();

	var merid = "AM";
	if(hour==12)
		merid="PM";
	if(hour > 12){
		hour-=12;
		merid="PM";
	}
	if(hour==0)
	{
		hour=12;
		merid="AM";
	}
	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":" + min + ":" + sec + ":" + merid;

	var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	var present = week[dayname] + "-" + months[month]  + date + "-" + year;
    
    const clock = document.getElementById("time").innerHTML=currentTime;
    const day = document.getElementById("dayname").innerHTML = present;	
}

currentTime();