
let nav = document.querySelector(".nav") /*navbar */
let bodyScroll = document.querySelector("html,body")

/*window scroll not body of document */
window.addEventListener("scroll" , ()=>{
    /*when user scroll nav bar shrunk down */
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
     {
      nav.classList.add("nav-scroll")
     }    
    else{
       nav.classList.remove("nav-scroll")
    }
})


/*activate items of nav bar */
let navbarlinks = document.querySelector(".items a:hover")
/*if user click on one of the items other will be not active  */
for (let i = 0 ; i < navbarlinks.length ; i++ )
{
    navbarlinks[i].addEventListener("click", ()=>{

        for(let j = 0 ; j < navbarlinks.length ; j++){
            navbarlinks[j].classList.remove("active")
        }
        navbarlinks[i].classList.add("active")
    })
}
     








 