import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm";
// import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
// import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

import MmenuLight from "mmenu-light";
import "mmenu-light/dist/mmenu-light.css";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

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

// const container = document.getElementById("myCarousel");
// const options = {
// 	Thumbs: {
// 		type: "modern",
// 	},
// };

// new Carousel(container, options, { Thumbs });
