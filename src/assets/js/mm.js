import MmenuLight from "mmenu-light";
import "mmenu-light/dist/mmenu-light.css";

const menu = new MmenuLight(document.querySelector("#menu"));
const navigator = menu.navigation({
	title: "ЛАВАНДА",
	// options
});
const drawer = menu.offcanvas({
	// options
});

document.addEventListener("DOMContentLoaded", () => {
	document
		.querySelector("a[href='#menu']")
		.addEventListener("click", (event) => {
			event.preventDefault();
			drawer.open();
		});
});
