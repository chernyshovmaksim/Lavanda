import axios from "axios";
export default async (phone, product) => {
	product = JSON.parse(product);

	const botToken = "6422810967:AAEmV__IU-b-pFnVKmSFcA4NKIbKJQhjYaE";
	const chatId = "lavanda56_orders";
	const message = `
        Клиент с номером: ***${phone}***. \nСделал заказ в один клик. \nТовар: ${product.productName}. \nЗа ${product.price} руб.
    `;
	// console.log(product);
	// {"id":"1","productName":"Монобукет из 51 розы Кения 40см","price":"1950"}

	const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=@${chatId}&parse_mode=markdown&text=${message}`;

	await axios.get(url);
};
