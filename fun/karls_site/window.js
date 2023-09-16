// Element declaration
const windowDiv = document.getElementById('window');
const windowBar = document.getElementById('window-title');
// Variables used for drag n drop
let heldDown = false;
let offset = {
   x:0,
   y:0
}

// Center the window
windowDiv.style.left = (window.innerWidth - windowDiv.clientWidth) / 2 + "px";
windowDiv.style.top = (window.innerHeight - windowDiv.clientHeight) / 2 + "px";

windowBar.addEventListener('mousedown', ev => {
   heldDown = true;
   // Cursor position on page - window elements position on page
   // That's the cursor's position within the title bar
   offset.x = ev.pageX - windowDiv.getBoundingClientRect().x;
   offset.y = ev.pageY - windowDiv.getBoundingClientRect().y;
});
windowBar.addEventListener('mouseup', () => {
   heldDown = false;
});

document.addEventListener('mousemove', ev => {
   if (heldDown)
   {
      // Set the windows position to the cursor position and
      // offset it by the cursor's position within the title bar
      windowDiv.style.top = ev.pageY - offset.y + "px";
      windowDiv.style.left = ev.pageX - offset.x + "px";
   }
});
