import Alpine from "alpinejs";
import persist from "@alpinejs/persist";

window.Alpine = Alpine;

Alpine.plugin(persist);

Alpine.data("main", () => ({
	cartIsVisible: false,
	scrollY: true,
	cart: Alpine.$persist([]),

	addToCard: (param) => {
		console.log(param);
	},

	buyInOneClick: () => {},
}));

Alpine.start();
