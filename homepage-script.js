const body = document.querySelector('body');

// body.addEventListener('click', function(){
//     document.getElementById('header-img').src ='images/sushi.jpeg';
// })

const cpeat = document.getElementById("cp-eat");
const cpdrink = document.getElementById("cp-drink");

const cpsing = document.getElementById("cp-sing");

const headerImg = document.getElementById('header-img');

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
