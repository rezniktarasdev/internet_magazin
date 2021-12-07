let products = [
   {
      "id": "0001",
      "name": "Apple TV 32GB",
      "price": 49,
      "img": "img/appletv.jpg"
   },
   {
      "id": "0002",
      "name": "Pebble Time",
      "price": 29,
      "img": "img/pebble.jpg"
   },
   {
      "id": "0003",
      "name": "Zendure 4-Port USB",
      "price": 49,
      "img": "img/zendure.jpg"
   },
   {
      "id": "0004",
      "name": "Withings Smart Body Analyzer ws-50",
      "price": 39,
      "img": "img/withings.jpg"
   },
   {
      "id": "0005",
      "name": "Ollo Clip New",
      "price": 19,
      "img": "img/ollo.jpg"
   },
   {
      "id": "0006",
      "name": "Fitbit Charge Heart Rate and Activity Tracker",
      "price": 19,
      "img": "img/fitbit.jpg"
   }
]


let minicart = document.querySelector('#minicart');
let productList = document.querySelector('#product_list');
let productButtons = document.getElementsByClassName('product_buttons');
let producty = '';


productList.addEventListener('click', (e) => {
   if (e.target.tagName == 'BUTTON') {
      minicart.innerHTML += minicartTemplate(e.target)

   }
})




for (let item of products) {
   producty += productTemplate(item)
}

function productTemplate(product) {
   return `<div class="product_item">
					<img class="product_image" src="${product.img}">
					<h3 class="product_title">${product.name}</h3>
					<p class="product_price">${product.price}</p>
					<button data-name = "${product.name}" data-price="${product.price}" class="product_buttons">Buy</button>
				</div>`
}

function minicartTemplate(product) {
   return `<h3>Cart:</h3>
   <div class="minicart_item">
      <h5 class="minicart_title">${product.dataset.name}</h5>
      <p class="minicart_price">${product.dataset.price}</p>
   </div>`
}

productList.innerHTML = producty;



console.log(productButtons);


























