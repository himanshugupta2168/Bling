// alert("heloo jii")
const loggedInHandler = document.querySelector(".loggedIn-links")
const profile = document.querySelector("#user-profile");

function visibility(){
    if (loggedInHandler.classList.contains("hidden")){
        loggedInHandler.classList.remove("hidden");
        loggedInHandler.classList.add("vis");
    }
    else{
        loggedInHandler.classList.remove("vis");
        loggedInHandler.classList.add("hidden");
    }
}

profile.addEventListener("click",visibility);