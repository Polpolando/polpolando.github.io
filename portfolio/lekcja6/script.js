x=50;
y=50;
kx='p';
ky='d';
v=1;
function f(){
 p=document.getElementById("c").getContext('2d');

 p.fillStyle='white'
 p.beginPath();
 p.arc(x,y,51,(Math.PI/180)*0,(Math.PI/180)*360,true);
 p.fill();

 if(x>=1050) kx='l';
 if(x<=50) kx='p';
 if(x<=px || x>=px+300){
  if(y>=450) {window.alert('Koniec gry'); clearInterval(z)};
 }
 else{
  if(y>=400) {ky='g'; v+=0.1};
 }
 if(y<=50) ky='d';
 

 if(kx=='p' && x<=1050) x+=6*v;
 if(kx=='l' && x>=50) x-=6*v;
 if(ky=='d' && y<=450) y+=8*v;
 if(ky=='g' && y>=50) y-=8*v;

 p.fillStyle='red'
 p.beginPath();
 p.arc(x,y,50,(Math.PI/180)*0,(Math.PI/180)*360,true);
 p.fill();
}
z=setInterval('f()',25);
px=0;
py=450;

function g(event){
 p=document.getElementById("c").getContext('2d');

 p.fillStyle='white';
 p.fillRect(px,py,300,50);


 klawisz=event.keyCode;
 if (klawisz==39 && px<=750) px+=50;
 if (klawisz==37 && px>=50) px-=50;

 p.fillStyle='red';
 p.fillRect(px,py,300,50);
}
