import MmenuLight from "mmenu-light";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
	modules: [Pagination],
	// direction: "vertical",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},
});

const menu = new MmenuLight(
	document.querySelector("#menu"),
	"(max-width: 600px)"
);
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
