import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";

import "./styles.css";

const content = document.querySelector("#content");
const btnLinks = document.querySelectorAll(".btn-link");

function loadPage() {
  addEventListener("load", () => {
    content.innerHTML = home();

    btnLinks.forEach((btnLink) => btnLink.addEventListener("click", () => {
      if (btnLink.textContent === "Home") {
        content.innerHTML = home();
      } else if (btnLink.textContent === "Menu") {
        content.innerHTML = menu();
      } else if (btnLink.textContent === "About") {
        content.innerHTML = about();
      } else {
        content.innerHTML = home();
      }
    }));
  })
}

loadPage();
