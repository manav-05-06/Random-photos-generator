const img=document.querySelector(".forimg");
const btn=document.querySelector("button");
const nav=document.querySelector(".navbar");
const but=document.querySelector(".buttom");



btn.addEventListener("click",()=>{
     number=10;
    addNewImages()
});

function addNewImages(){
    for (let index = 0; index <number; index++) {
        const newimg=document.createElement("img");
        newimg.src=`https://picsum.photos/300/300?random=${Math.floor(Math.random()*2000)}`
        img.appendChild(newimg);
    }
}
const search=document.querySelector(".search-bar");

const mag=document.querySelector(".magnifier");

search.addEventListener("click",()=>{
    search.classList.toggle("active")
})

