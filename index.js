const bar=document.querySelector(".mainbar");
const cont=document.querySelector(".barcontent");
bar.addEventListener("click",()=>{
    cont.classList.toggle("hidden")
})