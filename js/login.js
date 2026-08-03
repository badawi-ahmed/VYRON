let username = document.querySelector("#username")
let password = document.querySelector("#password")

let loginBtn = document.querySelector("#sign_in")

let getUsername = localStorage.getItem("username")

let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click" , function(a){
    a.preventDefault()
    if (username.value === "" || password.value === "" ){
        alert("Please fill data")
    }else{
        if(getUsername && getUsername.trim()  === username.value.trim() &&  getPassword && getPassword.trim()  === password.value ){

            setTimeout (() => {
            window.location = "index.html"
        }, 1000 )

        }else{
            alert("username or password is worng")
        }
    }
})
