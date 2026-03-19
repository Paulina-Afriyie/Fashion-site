let cart = [];
let total = 0;

function addToCart(name, price){
cart.push({name, price});
total += price;

updateCart();

alert(name + " added to cart");
}

function updateCart(){
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const count = document.getElementById("cart-count");

if(cartItems){
cartItems.innerHTML = "";

cart.forEach(item => {
let li = document.createElement("li");
li.textContent = item.name + " - $" + item.price;
cartItems.appendChild(li);
});
}

if(totalDisplay) totalDisplay.textContent = total;
if(count) count.textContent = cart.length;
}

function toggleCart(){
document.getElementById("cart").classList.toggle("active");
}

function clearCart(){
cart = [];
total = 0;
updateCart();
}




