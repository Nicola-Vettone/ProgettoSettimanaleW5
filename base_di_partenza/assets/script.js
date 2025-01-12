addEventListener("scroll",(event) => {
    if (scrollY >= 353.86){
    document.querySelector(".navBar").classList.add("scrolled");
    }
    //tolgo la classe riportando alla situazione iniziale quando lo scoll torna nel range di altezza della parte gialla
    else{
        document.querySelector(".navBar").classList.remove("scrolled");
    }
})
