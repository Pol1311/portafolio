const cartas = document.querySelectorAll(".cartas");
const menu = document.querySelector(".menu");
const boxmenu = document.querySelector(".boxmenu");
    
console.log(cartas);

cartas.forEach((elemento) => {
    elemento.addEventListener("mouseover", (e) => {
        elemento.style.boxShadow = "10px 10px 12px black";
        elemento.style.border= "3px solid black"
})})

cartas.forEach((elemento) => {
    elemento.addEventListener("mouseout", (e) => {
        elemento.style.boxShadow = "5px 5px 5px rgb(164, 162, 162)";
        elemento.style.border = "1px solid rgb(164, 162, 162)";
})})

cartas.forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
    
})})

menu.addEventListener("mouseover",(e) => {
     boxmenu.style.display = "flex" 
});

