function zegar(){
 c=new Date();
 h=c.getHours();
 m=c.getMinutes();
 s=c.getSeconds();
 ms=c.getMilliseconds();

 h=checkTime(h)
 m=checkTime(m)
 s=checkTime(s)
 if (ms<10){ms="00"+ms}
 else if (ms<100){ms="0"+ms}
 monthName=["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]

 day=c.getDate();
 month=monthName[c.getMonth()];
 year=c.getFullYear();


 document.getElementById("h").innerHTML=h
 document.getElementById("h").style.height=h/24*100+"%"
 document.getElementById("m").innerHTML=m
 document.getElementById("m").style.height=m/60*100+"%"
 document.getElementById("s").innerHTML=s
 document.getElementById("s").style.height=s/60*100+"%"
 document.getElementById("ms").innerHTML=ms
 document.getElementById("ms").style.height=ms/1000*100+"%"
 document.getElementById("day").innerHTML=day
 document.getElementById("day").style.height=day/31*100+"%"
 document.getElementById("month").innerHTML=month
 document.getElementById("month").style.height=(c.getMonth()+1)/12*100+"%"
 document.getElementById("year").innerHTML=year

 
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}
setInterval('zegar()', 9)