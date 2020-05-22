






f = document.getElementsByClassName('analy')[0];
console.log(f);
    

document.querySelectorAll('.nav-buttons button').forEach(item => {
    
    item.addEventListener('click', event => {
        let k = document.getElementsByClassName(item.id)[0];
        f.classList.add("hidden");
        k.classList.remove("hidden");
        console.log(item);
        f= k;
        
    });
    
})




