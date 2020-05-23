





f = document.getElementsByClassName('analy')[0];
document.querySelectorAll('.nav-buttons button').forEach(item => {
    
    item.addEventListener('click', event => {
        let k = document.getElementsByClassName(item.id)[0];
        f.classList.add("hidden");
        k.classList.remove("hidden");
        f=k;
        
    });
    
})



menu = document.getElementsByClassName("main-menu")[0];


modal = document.getElementsByClassName("modal")[0];
modalbtn = document.getElementsByClassName("modal-button")[0];

console.log(modalbtn);

document.querySelectorAll(".buy-buttons button").forEach(button=> {
    button.addEventListener("click",() =>{
      modal.classList.remove("hidden");
    });
});

modalbtn.addEventListener("click",() =>{
  modal.classList.add("hidden");
});



function openModal(){
  modal.classList.remove("hidden");
}

function toggleMenu(){
  menu.classList.toggle("hidden");
}





























function backToTop(){
    document.body.scrollTop = 0;  // For Safari
    document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE and Opera
}
function scrollFunction() {
    btn=document.getElementsByClassName("button-up")[0];
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
}
  window.onscroll = function() {scrollFunction()};













