





f = document.getElementsByClassName('analy')[0];
document.querySelectorAll('.nav-buttons button').forEach(item => {
    
    item.addEventListener('click', event => {
        let k = document.getElementsByClassName(item.id)[0];
        f.classList.add("hidden");
        k.classList.remove("hidden");
        f=k;
        
    });
    
})






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














  
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}