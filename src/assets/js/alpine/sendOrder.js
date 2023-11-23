import Alpine from "alpinejs";
import axios from "axios";
import sendToTelegram from "../util/sendToTelegram";

export default () => {
	const phone = Alpine.store("client").phone;
	const product = Alpine.store("order").product;

	sendToTelegram(phone, product);
};
