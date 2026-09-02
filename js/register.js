let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let registerBtn = document.querySelector("#Register")

registerBtn.addEventListener("click", function (a) {
    a.preventDefault()
    if (firstName.value === "" || lastName.value === "" || email.value === "" || password.value === "") {
        alert("Please fill data")
    } else {
        localStorage.setItem("firstName", firstName.value);
        localStorage.setItem("lastName", lastName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);

        setTimeout(() => {
            window.location = "login.html"
        }, 1200)
    } alert("Account created successfully!")
})

