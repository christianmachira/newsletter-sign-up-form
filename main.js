const form = document.querySelector("form");
// const button=document.querySelector("button");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".container2");
form.addEventListener("submit",(e) => {
    e.preventDefault();
    card_1.classList.add("hide");
    card_2.classList.remove("hide");
});
// button.addEventListener("button",(e)=>{
//     e.preventDefault();
//     card_1.classList.add("hide");
//     card_2.classList.remove("hide");
// })
