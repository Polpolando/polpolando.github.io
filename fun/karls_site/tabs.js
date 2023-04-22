const tabList = document.querySelector('menu[role=tablist]');
const tabButtons = document.querySelectorAll('button[role=tab]');

tabButtons.forEach((btn) =>
   btn.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Iterate through each tabButton
      tabButtons.forEach((button) => {
         // If it finds the pressed button, set it to be selected and open it's respective tab
         if (button.getAttribute("aria-controls") === e.target.getAttribute("aria-controls")) {
            button.setAttribute("aria-selected", true);
            openTab(e, tabList);
         } 
         // Else deselect the button
         else 
            button.setAttribute("aria-selected", false);
      });
   })
);

function openTab(event, tab) {
   // All the tab articles
   const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
   // Hide all articles
   articles.forEach((p) => {
      p.setAttribute("hidden", true);
   });
   // Find the article passed from the argument and reveal it
   const article = tab.parentNode.querySelector(
      `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
   );
   article.removeAttribute("hidden");
}
