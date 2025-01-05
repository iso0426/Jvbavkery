const searchIcon = document.querySelector(".search-icon")
const searchFrom = document.querySelector(".search-from")
const menuIcon = document.querySelector(".menu-icon")
const navbar = document.querySelector(".navbar")


searchIcon.addEventListener("click", ()=>{
    searchFrom.classList.add("active")
    cartItemsContainr.classList.remove("active")
    navbar.classList.remove("active")

})

menuIcon.addEventListener("click", ()=>{
    navbar.classList.add("active")
    searchFrom.classList.remove("active")
    cartItemsContainr.classList.remove("active")

})


 const cartIcon = document.querySelector(".cart-icon")
 const cartItemsContainr = document.querySelector(".cart-items-container")
 cartIcon.addEventListener("click", () =>{
    cartItemsContainr.classList.add("active")
    searchFrom.classList.remove("active")
    navbar.classList.remove("active")

 })

