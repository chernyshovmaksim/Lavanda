import Alpine from "alpinejs";

export default (param) => {
	const productID = param.getAttribute("data-id");
	const productPRICE = param.getAttribute("data-price");
	const productNAME = param.querySelector("h2").innerText;

	if (productID && productNAME && productPRICE) {
		Alpine.store("settings").toggleShowPopupBuyOneClick();

		let product = {
			id: productID,
			productName: productNAME,
			price: productPRICE,
		};

		Alpine.store("order").setProduct(JSON.stringify(product));
	}
};
