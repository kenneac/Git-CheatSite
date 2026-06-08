//------------------ MAKING A NAV ITEM ACTIVE ------------------------
const navItems = document.querySelectorAll("body>nav li");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("active"));

    item.classList.add("active");
  });
});


//------------------- VIEWING SOME OR ALL THE CONTENTS ---------------
const body = document.body;

function switchView(view) {
  // Remove all possible view classes
  body.classList.remove(
    "arrangeViewAll",
    "arrangeViewWorkFlow",
    "arrangeViewMainContent",
    "arrangeViewExtras"
  );

  // Add needed one
  body.classList.add(view);
}

// bind buttons
document
  .getElementById("btn-viewAll")
  .addEventListener("click", () => switchView("arrangeViewAll"));
document
  .getElementById("btn-viewWorkFlow")
  .addEventListener("click", () => switchView("arrangeViewWorkFlow"));
document
  .getElementById("btn-viewMainContent")
  .addEventListener("click", () => switchView("arrangeViewMainContent"));
document
  .getElementById("btn-viewExtras")
  .addEventListener("click", () => switchView("arrangeViewExtras"));
