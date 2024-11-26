const burgir = document.querySelector(".burgir__menu");
const headerNav = document.querySelector(".header__nav");
burgir.addEventListener("click", () => {
    burgir.classList.toggle("open"); //turns the burgir to x
    headerNav.classList.toggle("open"); //header nav appears
});
