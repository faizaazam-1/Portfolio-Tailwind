const menu1 = document.querySelector("#menu1")
const list1 = document.querySelector("#list1")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

menu1.addEventListener("click", ()=>{
    list1.classList.toggle("hidden")
    menu1.classList.toggle("bg-white")
})

 hLinks.forEach(link => {
    link.addEventListener("click",()=>{
    list1.classList.toggle("hidden")
    menu1.classList.toggle("bg-white")
})
});

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
})