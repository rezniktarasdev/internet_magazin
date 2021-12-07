// VARIABLES
let minicart = document.querySelector("#minicart");
let product_list = document.querySelector("#product_list");
let product_buttons = document.getElementsByClassName("product_button")
let minicart_list = document.querySelector("#minicart_list")
let minicart_total = document.querySelector("#minicart_total")
let productsList = "";
let addedToCart = {};

if (localStorage.minicart) {
	addedToCart = JSON.parse(localStorage.minicart)
}

// AJAX FOR JSON
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://zombee.space/ast/products.json")
xhr.send();
xhr.onload = function () {
	localStorage.products = xhr.response;

	for (let item of JSON.parse(localStorage.products)) {
		productsList += product_template(item)
	}
	product_list.innerHTML = productsList
}

updateMinicart()

// ADD TO CART
product_list.addEventListener("click", function (e) {
	if (e.target.tagName == "BUTTON") {

		if (addedToCart[e.target.dataset.id]) {
			addedToCart[e.target.dataset.id].qty += 1
		}
		else {
			addedToCart[e.target.dataset.id] = {
				id: e.target.dataset.id,
				name: e.target.dataset.name,
				price: e.target.dataset.price,
				qty: 1
			};
		}

		updateMinicart()
	}
})

minicart.addEventListener("click", function (e) {
	if (e.target.tagName == "BUTTON") {
		delete addedToCart[e.target.dataset.id]
	}
	updateMinicart()
})

// UPDATE MINICART
function updateMinicart() {
	let totalPrice = 0;
	minicart_list.innerHTML = ""

	for (let item in addedToCart) {
		minicart_list.innerHTML += minicart_template(addedToCart[item]);

		totalPrice += addedToCart[item].price * addedToCart[item].qty;
	}

	minicart_total.innerText = totalPrice;

	localStorage.minicart = JSON.stringify(addedToCart);
}

// TEMPLATE FOR PRODUCTS IN THE LIST
function product_template(product) {
	return `<div class="product_item">
				<img class="product_image" src="${product.img}">
				<h3 class="product_title">${product.name}</h3>
				<p class="product_price">${product.price}</p>
				<button data-id="${product.id}"
						data-name="${product.name}" 
						data-price="${product.price}" 
						class="product_button">Buy</button>
			</div>`
}

// TEMPLATE FOR PRODUCTS IN THE MINICART
function minicart_template(product) {
	return `<div class="minicart_item">
				<h5 class="minicart_title">${product.name}</h5>
				<p class="qty">${product.qty}</p>
				<b class="minicart_price">${product.price}</b>
				<button data-id="${product.id}"
						class="minicart_button">Remove</button>
			</div>`
}

