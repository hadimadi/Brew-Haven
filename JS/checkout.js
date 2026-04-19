var menuBtn = document.getElementById("menuBtn");
var navMenu = document.getElementById("navMenu");
// var productsToggle = document.getElementById("productsToggle");
// var productsDropdown = document.querySelector(".products-dropdown");
var navbar = document.getElementById("navbar");
var links1 = document.getElementById("links-1");
var links2 = document.getElementById("links-2");
var userName = document.getElementById("userName");
var logout = document.getElementById("logout");
var checkoutItems = document.getElementById("checkoutItems");
var totalPrice = document.getElementById("totalPrice");
var placeOrder = document.getElementById("placeOrder");

if(localStorage.getItem("name")){
    links1.style.display = "none";
    links2.style.display = "flex";
    userName.innerHTML = localStorage.getItem("name");
} else {
    links1.style.display = "flex";
    links2.style.display = "none";
}

logout.addEventListener("click", function(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setTimeout(function(){
          window.location.reload();
    }, 500)
})



menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");

    if (!navMenu.classList.contains("active")) {
        productsDropdown.classList.remove("active");
    }
});

// productsToggle.addEventListener("click", function (e) {
//     if (window.innerWidth <= 768) {
//         e.preventDefault();
//         productsDropdown.classList.toggle("active");
//     }
// });

// document.addEventListener("click", function (e) {
//     if (window.innerWidth <= 768) {
//         if (
//             !productsDropdown.contains(e.target) &&
//             !menuBtn.contains(e.target)
//         ) {
//             productsDropdown.classList.remove("active");
//         }
//     }
// });

window.addEventListener("scroll", function(){
    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});


    var cart = JSON.parse(localStorage.getItem("cart")) || []
    var checkoutItems = document.getElementById("checkoutItems")
    var total = document.getElementById("total")

    function saveCart(){
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    
    function drawCheckout() {
        checkoutItems.innerHTML = ""

        if(cart.length === 0){
            checkoutItems.innerHTML = `<h2 class="empty-checkout">Your cart is empty</h2>`
            
        
        totalPrice.innerHTML = "$0.00"
        return
    
        }

    
        cart.forEach(item => {
            checkoutItems.innerHTML += `
                <div class="checkout-item">
                <div class="checkout-item-left">
                    <img src="${item.img}" alt="${item.title}">
                            <div class="checkout-item-info">
        <h4>${item.title}</h4>
        <p>$${item.price}</p>
        <div class="checkout-item-quantity">
        <button class="checkout-quantity-btn minus" onclick="decreaseQuantity(${item.id})">-</button>
        <span>${item.quantity}</span>
        <button class="checkout-quantity-btn plus" onclick="increaseQuantity(${item.id})">+</button>
        </div>
        </div>
        </div>
            <i class="checkout-remove-btn fa fa-trash" onclick="removeFromCart(${item.id})">
        </i>
    
        </div>`
    })


        var total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
        totalPrice.innerHTML = `
        <div class="total-box d-flex justify-content-between align-items-center">
        <span class="total-text"> </span> 
        <span class="total-price">$${total.toFixed(2)}
        </span>
        </div>

        `
    }   

    function increaseQuantity(id){
        var product = cart.find(item => item.id === id)
    
    if(product){
        product.quantity += 1
        saveCart()
        drawCheckout()
    }

    }

    function decreaseQuantity(id){
        var product = cart.find(item => item.id === id)
    
        if(!product) return

        if(product.quantity > 1){
        product.quantity -= 1
        } else if(product.quantity <= 0){
            removeFromCart(id)
        } else {
            cart = cart.filter(item => item.id !== id)
        }
            saveCart()
            drawCheckout()
        }

    function removeFromCart(id){
        cart = cart.filter(item => item.id !== id)
        saveCart()
        drawCheckout()
    }
    
    

    drawCheckout()


    placeOrder.addEventListener("click", function(){
        classList.add("active")
    })