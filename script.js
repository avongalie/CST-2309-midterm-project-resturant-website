const hambgMenu = document.getElementById('hambg-menu');
const logo = document.getElementById('logo');
const ul = document.querySelector('ul');
const mainContent = document.getElementById('main-content');
const menuOverlay = document.getElementById('menu-overlay');

const navLink = document.querySelectorAll(".nav-link");

const hm = document.getElementById('hm');


let menuOpen = false;

hm.addEventListener('click', (event) => {
    if(event.target.id === "hambg-menu"){
        if(menuOpen === true){
            hambgMenu.style.color = "white";
            navLink.forEach((item) =>{
                // item.style.color = "white";
                item.classList.add("white");
                item.classList.remove("black");
            }
            )
            ul.classList.add("hidden");
            logo.style.zIndex = "1";
            mainContent.style.display = "block";
            menuOverlay.style.display = "none";
            menuOpen = false;
        }else{
            hambgMenu.style.color = "black";
            navLink.forEach((item) =>{
                // item.style.color = "black";
                
                item.classList.remove("white");
                item.classList.add("black");
            }
            )
            ul.classList.remove("hidden");
            logo.style.zIndex = "0";
            mainContent.style.display = "none";
            menuOverlay.style.display = "block";
            menuOpen = true;
        }
    }
})
