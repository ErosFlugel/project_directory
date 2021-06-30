const menuIcon = document.querySelector(".btn-icon");
const menuList = document.querySelector(".menu-content");
menuIcon.addEventListener("click", openCloseMenu);

function openCloseMenu() {
  if (menuList.classList.contains("hidden")) {
    menuList.classList.remove("hidden");
    menuIcon.style.right = "24.5em";
  } else {
    menuList.classList.add("hidden");
    menuIcon.style.right = "0";
  }
}
