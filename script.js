// Plain javascript
// The idea of this page is to fetch all the .md pages from the page repo, process them and use them as content for page
// Step-by-step process:
// 1. Initialize connection with the GitHub api
// 2. Fetch the contents of the `/pages/` directory, the structure of that directory is as follows:
//    /pages
//     ├─/category_1
//     │ ├─index.md
//     │ ├─file_1.md
//     │ ├─file_2.md
//     │ └─...
//     ├─/category_2
//     │ ├─index.md
//     │ ├─file_1.md
//     │ ├─file_2.md
//     │ └─...
//     └─...
//    The `index.md` file is the main file for the category, it will be used as the page content, if the user
//    navigates to the category page. The other files will be used as the content for the subpages.
//
// 3. Create navigation based on the fetched pages, with the category names as the main navigation, that show a
//    dropdown list of the subpages:
//    Category 1 | Category 2 | Category 3 | ...
//    ==========================================
//    File 1     | File 1     | File 1     | ...
//    File 2     | File 2     | File 2     | ...
//
//    The button names, should be fetched from within the files, using some special tag or something, I still haven't
//    decided on that.
//
// 4. Create a function that fetches the content of the pages, and displays it in the main content area, depending on
//    the button clicked.
//    The button should activate a function that will get the content of that page, parse it and display it on the page.


// Run on load of the page
document.addEventListener("DOMContentLoaded", function() {
   const main = document.getElementsByTagName('main')[0];
   main.innerHTML = "Script has loaded!";
});

