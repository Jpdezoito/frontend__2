

let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let cards = document.querySelectorAll(".item");
let p = document.querySelectorAll("p")






function alteraTemaComToogle() {       
    body.classList.toggle("body-dark")
    h1.classList.toggle("h1-dark") 
    
    for(let card of cards || p){
        card.classList.toggle("img-dark")
        card.classList.toggle('p-dark')        
    }
}





