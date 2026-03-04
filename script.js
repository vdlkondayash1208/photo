/* ===== WHATSAPP BUTTON ===== */

function openWhatsApp(){

window.open("https://wa.me/919876543210","_blank");

}

/* ===== HOME SLIDER ===== */

let slides=document.querySelectorAll(".slide");

let index=0;

function changeSlide(){

if(slides.length===0) return;

slides[index].classList.remove("active");

index++;

if(index>=slides.length){
index=0;
}

slides[index].classList.add("active");

}

setInterval(changeSlide,4000);

/* ===== GALLERY FILTER ===== */

function filterGallery(category){

let items=document.querySelectorAll(".gallery-item");

items.forEach(function(item){

if(category==="all"){
item.style.display="block";
}
else if(item.classList.contains(category)){
item.style.display="block";
}
else{
item.style.display="none";
}

});

}