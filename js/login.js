let email = document.querySelector("#email")
let password = document.querySelector("#password")

let loginBtn = document.querySelector(".login")


let getEmail = localStorage.getItem("email")

let getPassword = localStorage.getItem("password")




loginBtn.addEventListener("click" , function(a){
    a.preventDefault()
    if (email.value === "" || password.value === "" ){
        alert("Please fill data")
    }else{
        if(getEmail && getEmail.trim()  === email.value.trim() &&  getPassword && getPassword.trim()  === password.value ){
            alert("Welcome to our Gaming Store! 🎮 Have fun!")
            setTimeout (() => {
            window.location = "index.html"
        }, 1000 )

        }else{
            alert("Email or password is worng")
        }
    }
})
