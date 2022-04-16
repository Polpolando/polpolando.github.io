function onload()
{
    today = new Date();
    let d = today.getDate();
    let h = today.getHours();
    let m = today.getMinutes();

    if (d == 1){
        d += " day ";
    } else d += " days ";
    if (h == 1){
        h += " hour ";
    } else h += " hours ";
    if (m == 1){
        m += " min ";
    } else m += " mins ";
    
    document.getElementById("date").innerHTML = d + h + m;
}
setInterval(onload, 1000)

var last_input;
function checkKeyDown(event)
{
    input_field = document.getElementById("terminal");

    if (event.keyCode == 13){                               // Enter to execute command, clear field
        last_input = input_field.value;
        Command(input_field.value);
        input_field.value="";
    }
    if(event.keyCode == 38 && input_field.value == ""){     // Arrow up one command history
        input_field.value = last_input;
        moveCursorToEnd(input_field)
    }
}
function checkKeyUp(event)                                  // Function so the cursor goes to end
{
    input_field = document.getElementById("terminal");
    if(event.keyCode == 38 && input_field.value == ""){     
        moveCursorToEnd(input_field)
    }
}
function Command(com)
{
    var output_field = document.getElementById("output");
    var message = "";
    switch(com){
        case "clear":
            Clear();
            break;
        case "test":
            Test();
            break;
        
        default:
            if(com != "") message += "Unknown command: " + com;
            break;
    }

    if (output_field.innerHTML != "") output_field.innerHTML += "<br>";
    output_field.innerHTML += message;
}


function moveCursorToEnd(el) {
	if (typeof el.selectionStart == "number") {
		el.selectionStart = el.selectionEnd = el.value.length;
	} else if (typeof el.createTextRange != "undefined") {
		el.focus();
		var range = el.createTextRange();
		range.collapse(false);
		range.select();
	}
}
