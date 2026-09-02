let userInfo = document.querySelector("#user");
let userBox = document.querySelector("#user_info");
let links = document.querySelector("#links");

if (localStorage.getItem("firstName")) {

    if (links) {
        links.remove();
    }

    if (userBox) {
        userBox.style.display = "flex";
    }

    if (userInfo) {
        userInfo.innerHTML =
            localStorage.getItem("firstName");
    }
}

let logout = document.querySelector("#logout");

if (logout) {

    logout.addEventListener("click", function (e) {

        e.preventDefault();

        localStorage.removeItem("firstName");

        window.location.href = "login.html";

    });

}