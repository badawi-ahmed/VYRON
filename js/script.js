
let userInfo = document.querySelector("#user_info")

let user = document.querySelector("#user")

let links = document.querySelector("#links")

if (localStorage.getItem("username")){
    links.remove();

    userInfo.style.display = "flex"
    user.innerHTML = localStorage.getItem("username")
}

let logOut = document.querySelector("#logout")
logOut.addEventListener("click", function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html";

    },1500)

})



let allProducts =document.querySelector(".products")

let products = [
    {
        id:1,
        title: " Samsung S26",
         title2: " Dark navy phone, close-up shot focused on the back cameras, black background",
        color: "black",
        imageUrl :  "Images/f4048c5c927671e642c350baa5e31ac5.jpg"
    },
    {
        id:2,
        title: "  Samsung A36",
        title2: "Dark green phone, placed on top of its original box, in a cozy desk setup",
        color: "black",
        imageUrl :  "Images/1049c050a300d18bf98b65ccb89eb8f2.jpg"
    },
    {
        id:3,
        title: " Samsung S25 FE",
        title2: "Navy blue phone, shown from front and back, triple camera on the back.",
        color: "blue",
        imageUrl :  "Images/c84db2820e286d2cb6d8a338f28579d6.jpg"
    },
    {
        id:4,
        title: "Samsung Z Flip6",
        title2:"Silver foldable phone, shown half-open, with two more closed units stacked below.",
        color: "Silver",
        imageUrl :  "Images/7c6e963857e86f17f33e109c2c0a966e.jpg"
    },

]
function drowItime (){
    let y = products.map((item) => {
        return `
        <div class="product_item">
                       <img class="product_item_img" src="${item.imageUrl}" alt="">
                       <div class="product_item_desc">
                           <h2> ${item.title}</h2>
                           <p>${item.title2}</p>
                           <span>${item.color}</span>
                       </div>
                       <div class="product_item_action">
                        <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
                        <i class="far fa-heart fav"></i>
                       </div>
                   </div> 
         `
    })
    allProducts.innerHTML=y;
}

drowItime ()


let cartsProductsDiv = document.querySelector(".carts_products div")
let bageAll = document.querySelector(".bage")


// let addItem = [] ;

let addItem = localStorage.getItem("ProductsInCart")?JSON.parse(localStorage.getItem("ProductsInCart")):[];
if(addItem) {
    addItem.map(item => {
        cartsProductsDiv.innerHTML += `<p>${item.title}</p>`;
    })
    bageAll.style.display = "block";
    bageAll.innerHTML = addItem.length;
}

    if(localStorage.getItem("username")){
        function addToCart(id){
    let chooseItem = products.find((item)=> item.id === id);
    cartsProductsDiv.innerHTML += `<p>${chooseItem.title}</p>`
    addItem = [...addItem,chooseItem]
    localStorage.setItem("ProductsInCart",JSON.stringify(addItem))
    let cartProductLenth = document.querySelectorAll(".carts_products div p")

    bageAll.style.display="block"
    bageAll.innerHTML = cartProductLenth.length

}

    }else{
        window.location= "login.html"
    }





// ///////////////////////////////////////////////////////
let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartsProducts = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartsProductsDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block"
         }
     } 
}


