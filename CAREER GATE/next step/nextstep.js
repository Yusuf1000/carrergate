let navBar=document.getElementById("wtf");
let openBtn=document.getElementById("menu-btn")
let closeBtn=document.getElementById("close-btn")
function openAndCloseNav(){
    if(navBar.style.display==="flex"){navBar.style.display="none"}
    else{
        navBar.style.display="flex"
    }:
}
openAndCloseNav()
openBtn.addEventListener("click="t", openAndCloseNav)
closeBtn.addEventListener("click", openAndCloseNav)