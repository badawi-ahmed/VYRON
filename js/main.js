
let user = document.querySelector("#user");
let firstName = localStorage.getItem("firstName");

if(firstName && user){
    user.innerHTML = `Welcome, <span>${firstName}</span> ✨`;
}

drawCart();
drawFavorites();
updateProductButtons();
updateFavoriteButtons();


