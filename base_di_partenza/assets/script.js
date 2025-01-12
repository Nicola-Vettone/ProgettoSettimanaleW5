addEventListener("scroll",(event) => {
    if (scrollY >= 353.86){
    document.querySelector(".navBar").classList.add("scrolled");
    }
    //tolgo la classe riportando alla situazione iniziale quando lo scoll torna nel range di altezza della parte gialla
    else{
        document.querySelector(".navBar").classList.remove("scrolled");
    }
})

let svg = document.querySelector('.svg svg');

let array = [...svg.querySelectorAll('g[opacity="1"]:not(g[aria-label])')]
function randomOpacity(){
    let index = Math.floor(Math.random()*array.length)
    let m = array[index]
    
    m.setAttribute('opacity', 0)
    setTimeout(()=>{
        m.setAttribute('opacity', 1)
    }, 2000)
}

setInterval(randomOpacity, 200)