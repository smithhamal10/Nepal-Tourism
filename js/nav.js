const burgerIcon = document.getElementById("burger");
const closeIcon = document.getElementById("close");
const hamburger = document.getElementById("hamburger");
const nav_menu = document.getElementById("nav_menu");
function toggleMenu() {
	if (closeIcon.classList.contains("none")) {
		closeIcon.classList.remove("none");
		burger.classList.remove("block");
		closeIcon.classList.add("block");
		burger.classList.add("none");
		nav_menu.style.display = "block";
	} else {
		closeIcon.classList.remove("block");
		burger.classList.remove("none");
		closeIcon.classList.add("none");
		nav_menu.style.display = "none";
	}
}

hamburger.addEventListener("click", toggleMenu);
