

// menuBtn.onclick = function(){
//     navMenu.classList.toggle("active");
//     menuBtn.classList.toggle("active");
// }





// productsToggle.onclick = function(e){
//     if(window.innerWidth <= 768){
//         e.preventDefault();
//     }
//     productsDropdown.classList.toggle("active");
// }

// document.addEventListener("click", function(e){
//     if(window.innerWidth <= 768){
//         if(!productsDropdown.contains(e.target) && !productsToggle.contains(e.target)){
//             productsDropdown.classList.remove("active");
//         }
      
//     }
// })


// menuBtn.addEventListener("click", function(){
//     navMenu.classList.toggle("active");
//     menuBtn.classList.toggle("active");

//     if(!navMenu.classList.contains("active")){
//         productsDropdown.classList.remove("active");
//     }
// })


var menuBtn = document.getElementById("menuBtn");
var navMenu = document.getElementById("navMenu");
var productsToggle = document.getElementById("productsToggle");
var productsDropdown = document.querySelector(".products-dropdown");
var navbar = document.getElementById("navbar");
var links1 = document.getElementById("links-1");
var links2 = document.getElementById("links-2");
var userName = document.getElementById("userName");
var logout = document.getElementById("logout");
var cart = document.getElementById("cart");
var closeCart = document.getElementById("closeCart");
var cartIcon = document.getElementById("cartIcon");
var mostPopularCards = document.getElementById("most-popular-cards");
var productsSection = document.getElementById("most-popular-section");
var cartItems = document.getElementById("cartItems");
var emptyCart = document.getElementById("emptyCart");
var cartTotal = document.getElementById("cartTotal");
var totalPrice = document.getElementById("totalPrice");
var totalDiv = document.getElementById("totalDiv");
var checkout = document.getElementById("checkout");
var productsSectionTitle = document.getElementById("productsSectionTitle");
var pagination = document.getElementById("pagination");
var currentCategory = 'all';
var currentPage = 1;
var itemsPerPage = 6;
var orderBtn = document.getElementById("orderBtn");
var about = document.getElementById("about");
var aboutUs = document.getElementById("about-us");
var contact = document.getElementById("contact");
var contactUs = document.getElementById("contact-us");
var hot = document.getElementById("hot");
var iced = document.getElementById("iced");
var desserts = document.getElementById("desserts");
var searchBtn = document.getElementById("searchBtn");
var searchInput = document.getElementById("searchInput");
var currentSearch = '';
var mobileSearchBtn = document.getElementById("mobileSearchBtn");
var mobileSearchBox = document.getElementById("mobileSearchBox");
var mobileSearchInput = document.getElementById("mobileSearchInput");
var mobileSearchSubmit = document.getElementById("mobileSearchSubmit");
var mobileCartIcon = document.getElementById("mobileCartIcon");
var mobileCartCount = document.getElementById("mobileCartCount");
var navLinks = document.querySelectorAll(".nav-link");
var home = document.getElementById("home");
var heroImg = document.getElementById("heroImg");
var data = [
    {
        id : 1,
        title : 'Latte',
        price : 4.99,
        img : 'Image/Hot.png',
        quantity : 1,
        category : 'hot'
    }
    ,

    {
        id : 2,
        title : 'Espresso',
        price : 3.99,
        img : 'Image/Espresso.jpg',
        quantity : 1,
        category : 'hot'
    },

    {
        id : 3,
        title : 'Iced Caramel',
        price : 5.99,
        img : 'Image/Iced Caramel.jpg',
        quantity : 1,
        category : 'iced'
    },

    {
        id : 4,
        title : 'Cold Brew',
        price : 4.99,
        img : 'Image/Cold Brew.jpg',
        quantity : 1,
        category : 'iced'
    },
    
    {
        id : 5,
        title : 'Strawberry Cheesecake',
        price : 6.99,
        img : 'Image/Strawberry Cheesecake.jpg',
        quantity : 1,
        category : 'desserts'
    },

    {
        id : 6,
        title : 'Tiramisu',
        price : 7.99,
        img : 'Image/Tiramisu.jpg',
        quantity : 1,
        category : 'desserts'
    },

    {
        id : 7,
        title : 'Cappuccino',
        price : 5.99,
        img : 'Image/Cappuccino.jpg',
        quantity : 1,
        category : 'hot'
    },

    {
        id : 8,
        title : 'Mocha',
        price : 6.49,
        img : 'Image/Mocha.jpg',
        quantity : 1,
        category : 'hot'
    },

    {
        id : 9,
        title : 'Iced Latte',
        price : 5.49,
        img : 'Image/Iced Latte.jpg',
        quantity : 1,
        category : 'iced'
    },

    {
        id : 10,
        title : 'Vanilla Iced Coffee',
        price : 5.99,
        img : 'Image/Vanilla Iced Coffee.jpg',
        quantity : 1,
        category : 'iced'
    },

    {
        id : 11,
        title : 'Croissant',
        price : 5.99,
        img : 'Image/Croissant.jpg',
        quantity : 1,
        category : 'desserts'
    },

    {
        id : 12,
        title : 'Donut',
        price : 4.99,
        img : 'Image/Donut.jpg',
        quantity : 1,
        category : 'desserts'
    },

    {
        id : 13,
        title : 'Brownies',
        price : 6.99,
        img : 'Image/Brownies.jpg',
        quantity : 1,
        category : 'desserts'
    },


    {
        id : 14,
        title : 'Chocolate Cake',
        price : 5.99,
        img : 'Image/Chocolate Cake.jpg',
        quantity : 1,
        category : 'desserts'
    }

]


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

productsToggle.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        productsDropdown.classList.toggle("active");
    }
});

document.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
        if (
            !productsDropdown.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {
            productsDropdown.classList.remove("active");
        }
    }
});

window.addEventListener("scroll", function(){
    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});



function performSearch(searchValue){
    currentSearch = searchValue.trim();
    currentPage = 1
    productsSectionTitle.innerHTML = "Search Results <i class='fa fa-search'></i>"
    drawProducts();
}

function getFilteredProducts(){
    var filtered = data
    if(currentCategory !== "all"){
        filtered = filtered.filter(item => item.category === currentCategory)
    } 
    if(currentSearch.trim() !== ""){ 
        filtered = filtered.filter(item => item.title.toLowerCase().includes(currentSearch.toLowerCase()))
    }
    return filtered
    }


    if(searchBtn){
        searchBtn.addEventListener("click", function(){
            productsSection.scrollIntoView({behavior: "smooth"})
            performSearch(searchInput.value)
        })
    }

    if(searchInput){
        searchInput.addEventListener("keydown", function(e){
            if(e.key === "Enter"){
                e.preventDefault()
                productsSection.scrollIntoView({behavior: "smooth"})
                performSearch(searchInput.value)
             
            }
        })
    }


    searchInput.addEventListener("input", function(){
        if(this.value.trim() === ""){
            currentSearch = ""
            currentPage = 1
            drawProducts();
        }
    })
// searchInput.addEventListener("input", function(){
//     currentSearch = this.value;
//     currentPage = 1
//     drawProducts();
// })


mobileSearchBtn.addEventListener("click", function(){
    mobileSearchBox.classList.toggle("active");
})

mobileSearchSubmit.addEventListener("click", function(){
    productsSection.scrollIntoView({behavior: "smooth"})
    performSearch(mobileSearchInput.value)
})

mobileSearchInput.addEventListener('keydown' , function(e){
    if(e.key === "Enter"){
        e.preventDefault()
        productsSection.scrollIntoView({behavior: "smooth"})
        performSearch(mobileSearchInput.value)
    }
})


function drawProducts(){
    var filteredProducts = getFilteredProducts()

    // No results
        if(filteredProducts.length === 0){
            mostPopularCards.style.display = 'block'
            productsSectionTitle.innerHTML = "Search Results <i class='fa fa-search'></i>";
        mostPopularCards.innerHTML = `
        <p class='no-results'>No results found.</p>
        `
        pagination.innerHTML = "";
        return
    } else {
        mostPopularCards.style.display = 'grid'
    }

    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    var paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    var x = paginatedProducts.map(item => {
        return `
        <div class="most-popular-card">
        <div class="card-img-box">
        <img src="${item.img}" alt="${item.title}" draggable="false" >
        </div>
        <div class="card-info-box">
         <h3>${item.title}</h3>
        <span>$${item.price}</span> 
         <button onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
        </div>
        `
    }).join("")

        mostPopularCards.innerHTML = x;

    drawPagination(filteredProducts.length)

}



function drawPagination(totalItems){
 pagination.innerHTML = "";
 
 var totalPages = Math.ceil(totalItems / itemsPerPage);
 if(totalPages <= 1) return;

 for(let i = 1; i <= totalPages; i++){
    pagination.innerHTML += `
    <button class='page-btn ${i === currentPage ? "active-page" : ""}' onclick="goToPage(${i})">${i}
    </button>
    `
 }
}


function goToPage(page){
    currentPage = page
    drawProducts()
}


var currentCategoryText = document.getElementById("currentCategory");

function selectCategory(category , element){
    currentCategory = category
    // currentCategoryText.innerHTML = element.innerHTML
    currentPage = 1
    
    if(category === 'all'){
        productsSectionTitle.innerHTML = "Our Products <i class='fa fa-coffee'></i>"
        currentCategoryText.innerHTML = "All Products"
        productsSection.scrollIntoView({behavior: "smooth"})
    } else if(category === 'hot'){
        productsSectionTitle.innerHTML = "Hot Drinks <i class='fa fa-coffee'></i>"
        currentCategoryText.innerHTML = "Hot"
        productsSection.scrollIntoView({behavior: "smooth"})
    } else if(category === 'iced'){
        productsSectionTitle.innerHTML = "Iced Drinks <i class='far fa-snowflake'></i>"
        currentCategoryText.innerHTML = "Iced"
        productsSection.scrollIntoView({behavior: "smooth"})
    } else if(category === 'desserts'){
        productsSectionTitle.innerHTML = "Desserts <i class='fa fa-cookie'></i>"
        currentCategoryText.innerHTML = "Desserts"
        productsSection.scrollIntoView({behavior: "smooth"})
    }
     
    document.querySelectorAll('.dropdown-list li').forEach(item => {
        item.classList.remove('active-filter')
    })

    if(element){
    element.classList.add('active-filter')
    }

    drawProducts()
    if(window.innerWidth <= 768){
        productsDropdown.classList.remove('active');
    }
    }

    
    drawProducts()





// Cart

cartIcon.addEventListener("click", function(){
        if(window.innerWidth <= 768){
        cart.classList.add('active');
        cart.style.display = "block";

    } else {
        if(cart.style.display === "none"){
    cart.style.display = "block";
    } else {
    cart.style.display = "none";
   }
}
})


if(mobileCartIcon){
    mobileCartIcon.addEventListener("click", function(){
      location.href = "checkout.html"
    })
}



closeCart.addEventListener("click", function(){
    if(window.innerWidth <= 768){
        cart.classList.remove('active');
    } else {
        cart.style.display = "none";
    }

})

var Products = JSON.parse(localStorage.getItem("cart")) || []

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(Products))
}

function updateCartCount(){
    var totalCount = Products.reduce((total, item) => total + item.quantity, 0)

var cartCount = document.getElementById("cartCount");
var mobileCartCount = document.getElementById("mobileCartCount");

if(cartCount){
    cartCount.innerHTML = totalCount
}

if(mobileCartCount){
    mobileCartCount.innerHTML = totalCount
}
}




    function drawCart(){
        cartItems.innerHTML = "";

        if(Products.length === 0){
            emptyCart.style.display = "block";
            cartTotal.style.display = "none";
            checkout.style.display = "none";
            totalDiv.innerHTML = "";
            updateCartCount()
            saveCart()
            return
        }
        emptyCart.style.display = "none";
        cartTotal.style.display = "block";
        checkout.style.display = "inline-block";


    Products.forEach(item => {
        cartItems.innerHTML +=  `
        <div class="cart-item">
        <div class="left">
        <img src="${item.img}" alt="${item.title}" draggable="false">
        <div class="cart-item-info">
        <h4>${item.title}</h4>
        <p>$${item.price}</p>
        <div class="cart-item-quantity">
        <button class="quantity-btn minus" onclick="decreaseQuantity(${item.id})">-</button>
        <span>${item.quantity}</span>
        <button class="quantity-btn plus" onclick="increaseQuantity(${item.id})">+</button>
        </div>
        </div>
        </div>

        <i class="remove-btn fa fa-trash" onclick="removeFromCart(${item.id})">
        </i>
        </div>`
    })

        var total = Products.reduce((total, item) => total + item.price * item.quantity, 0)
        totalDiv.innerHTML = `
        <div class="total-box d-flex justify-content-between align-items-center">
        <span class="total-text">Total Price: </span> 
        <span class="total-price">$${total.toFixed(2)}
        </span>
        </div>`

        updateCartCount()
        saveCart()

    }


    function bounceCart(){
    cartIcon.classList.remove("bounce")
    mobileCartIcon.classList.remove("bounce")
    void cartIcon.offsetWidth;
    void mobileCartIcon.offsetWidth;
    cartIcon.classList.add("bounce")
    mobileCartIcon.classList.add("bounce")
}

    function addToCart(id){

        if(!localStorage.getItem('name')){
            alert("Please login first.")
            location = "login.html"
            return
        }

    var addedProducts = data.find(item => item.id === id)
    var existingProduct = Products.find(item => item.id === id)

    if(existingProduct){
        existingProduct.quantity++
    } else {
        Products.push({...addedProducts , quantity: 1

        })
    }

    drawCart()
    bounceCart()
    }

    function increaseQuantity(id){
        var product = Products.find(item => item.id === id)

        if(product){
            product.quantity += 1
        }
        drawCart()
    }

    function decreaseQuantity(id){
        var product = Products.find(item => item.id === id)

        if(!product) return

        if(product.quantity > 1){
            product.quantity -= 1
        }

        if(product.quantity <= 0){
            Products = Products.filter(item => item.id !== id)
        }
        drawCart()
    }

function removeFromCart(id){
    Products = Products.filter(item => item.id !== Number(id))
    console.log(Products)
    drawCart()
}


closeCart.addEventListener("click", function(){
    cart.style.display = "none";
})

drawCart()


orderBtn.addEventListener("click", function(){
    productsSection.scrollIntoView({behavior: "smooth"})
})


about.addEventListener("click", function(){
    aboutUs.scrollIntoView({behavior: "smooth"})
})

contact.addEventListener("click", function(){
    contactUs.scrollIntoView({behavior: "smooth"})
})

navLinks.forEach(link => {
    link.addEventListener("click", function(){
        navLinks.forEach(item => item.classList.remove('active'))
        this.classList.add('active')
    })
})

home.addEventListener("click", function(){
    if(location === index.html){
        heroImg.scrollIntoView({behavior: "smooth"})
    }
    location = "index.html"
})

