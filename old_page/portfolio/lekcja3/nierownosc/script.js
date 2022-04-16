function sprawdzA(){
    a=document.getElementById("wa");
    if(a.value=="" || a.value==0){
        document.body.style.background="radial-gradient(circle,red,black,black)"
        a.style.backgroundColor="red"
        return "zle";
    }
    else{
        document.body.style.background="radial-gradient(circle,white,black)"
        a.style.backgroundColor="#c6fc8f"
        return "dobrze";
    }
}
function sprawdzB(){
    b=document.getElementById("wb");
    if(b.value==""){
        document.body.style.background="radial-gradient(circle,red,black,black)"
        b.style.backgroundColor="red"
        return "zle";
    }
    else{
        document.body.style.background="radial-gradient(circle,white,black)"
        b.style.backgroundColor="#c6fc8f"
        return "dobrze";
    }
}
function sprawdzC(){
    c=document.getElementById("wc");
    if(c.value==""){
        document.body.style.background="radial-gradient(circle,red,black,black)"
        c.style.backgroundColor="red"
        return "zle";
    }
    else{
        document.body.style.background="radial-gradient(circle,white,black)"
        c.style.backgroundColor="#c6fc8f"
        return "dobrze";
    }
}

function oblicz(){
    ileZle=0;
    if(sprawdzA()=="zle"){ileZle++}
    if(sprawdzB()=="zle"){ileZle++}
    if(sprawdzC()=="zle"){ileZle++}
    if(ileZle==0){
        a=document.getElementById("wa").value;
        b=document.getElementById("wb").value;
        c=document.getElementById("wc").value;
        delta=b*b-4*a*c;
        document.getElementById("delta").innerHTML="delta = "+delta;
    }
    if(delta<0){document.getElementById("brak").innerHTML="Brak rozwiazan"}
    else if(delta==0){document.getElementById("x0").innerHTML="x<sub>0</sub> = "+(-b)/(2*a)}
    else{document.getElementById("x1").innerHTML="x<sub>1</sub> = "+((-b-Math.sqrt(delta))/(2*a)); document.getElementById("x2").innerHTML="x<sub>2</sub> = "+((-b+Math.sqrt(delta))/(2*a))}
}