const body = document.querySelector('body');

// body.addEventListener('click', function(){
//     document.getElementById('header-img').src ='images/sushi.jpeg';
// })

const cpeat = document.getElementById("cp-eat");
const cpdrink = document.getElementById("cp-drink");

const cpsing = document.getElementById("cp-sing");

const headerImg = document.getElementById('header-img');
const homeGithub = document.getElementById('home-github');

cpeat.addEventListener('mouseover', () => 
    headerImg.src= 'images/eat.png'
)

cpeat.addEventListener('mouseout', () => 
    headerImg.src= 'images/homepage_background.jpeg'
)

cpdrink.addEventListener('mouseover', () => 
    headerImg.src= 'images/drink.png'
)

cpdrink.addEventListener('mouseout', () => 
    headerImg.src= 'images/homepage_background.jpeg'
)

cpsing.addEventListener('mouseover', () => 
    headerImg.src= 'images/sing.jpeg'
)

cpsing.addEventListener('mouseout', () => 
    headerImg.src= 'images/homepage_background.jpeg'
)

hm.addEventListener('click', (event) => {
    if(event.target.id === "hambg-menu"){
        if(menuOpen === true){
            homeGithub.src = "images/github_logo.png";
        }else{
            homeGithub.src = "images/github_logo_white.png";
        }
    }
})