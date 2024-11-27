import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";

import "./styles.css";

const content = document.querySelector("#content");

function loadPage() {
  addEventListener("load", () => {
    content.innerHTML = home();
  })
}

loadPage();
