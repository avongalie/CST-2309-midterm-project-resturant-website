const cocktailMenu = document.getElementById('cocktail-menu');
const dinnerMenu = document.getElementById('dinner-menu');

let menuActive = "dinner";

//hides cocktail menu on intialization
cocktailMenu.style.display = "none";


function openCocktailMenu(){
    dinnerMenu.style.display = "none";
    cocktailMenu.style.display = "block";
}

function openDinnerMenu(){
    cocktailMenu.style.display = "none";
        dinnerMenu.style.display = "block";
}
