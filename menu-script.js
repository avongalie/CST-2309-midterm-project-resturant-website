const cocktailMenu = document.getElementById('cocktail-menu');
const dinnerMenu = document.getElementById('dinner-menu');
const dinnerLink = document.getElementById('dinner-link');
const cocktailLink = document.getElementById('cocktail-link');



let menuActive = "dinner";

//hides cocktail menu on intialization
cocktailMenu.style.display = "none";


// function openCocktailMenu(){
//     dinnerMenu.style.display = "none";
//     cocktailMenu.style.display = "block";
// }

// function openDinnerMenu(){
//     cocktailMenu.style.display = "none";
//         dinnerMenu.style.display = "block";
// }

function openMenu(menu){
    switch(menu){
        case 'dinner':
            cocktailMenu.style.display = "none";
            dinnerMenu.style.display = "block";
            dinnerLink.style.textDecoration = "underline";
            cocktailLink.style.textDecoration = "none";
            
            break;
        case 'cocktail':
            dinnerMenu.style.display = "none";
            cocktailMenu.style.display = "block";
            cocktailLink.style.textDecoration = "underline";
            dinnerLink.style.textDecoration = "none";
    }
}

//TESTS
// const body = document.querySelector('body');
// console.log(body)
// body.addEventListener('click', function(){
//     document.getElementById('header-img').src ='images/sushi.jpeg';
// })