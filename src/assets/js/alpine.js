import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import mask from "@alpinejs/mask";

import buyInOneClick from "./alpine/buyInOneClick";
import addToCart from "./alpine/addToCart";
import sendOrder from "./alpine/sendOrder";

window.Alpine = Alpine;

Alpine.plugin(persist);
Alpine.plugin(mask);

Alpine.store("settings", {
	showPopupBuyOneClick: false,
	toggleShowPopupBuyOneClick() {
		this.showPopupBuyOneClick = !this.showPopupBuyOneClick;
	},
});
Alpine.store("client", {
	phone: Alpine.$persist(0),
	setPhone(param) {
		this.phone = param;
	},
});
Alpine.store("order", {
	product: Alpine.$persist(0),
	setProduct(param) {
		this.product = param;
	},
});

Alpine.data("main", () => ({
	cartIsVisible: false,
	scrollY: true,
	cart: Alpine.$persist([]),
	clientPhone: "",

	addToCard: addToCart,
	buyInOneClick: buyInOneClick,
	sendOrder: sendOrder,
}));

Alpine.start();
