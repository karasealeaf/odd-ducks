let productContainer = document.querySelector ('section');
let image1 = document.querySelector('section img:first-child')
let image2 = document.querySelector('section img:nth-child(2)')
let image3 = document.querySelector('section img:nth-child(3)')

function Product(name, src) {
this.name = name;
this.src = src;
this.view = 0;
this.clicks = 0;
}

function getRandomIndex() {
return Math.floor(Math.random() * allProduct.length);
}

function renderProduct () {
let product1Index = getRandomIndex();
let product2Index = getRandomIndex();
let product3Index = getRandomIndex();

while (product1Index === product2Index || product2Index === product3Index || product1Index === product3Index) {
  product2Index = getRandomIndex();
}

image1.src = allProduct[product1Index].src;
image2.src = allProduct[product2Index].src;
image3.src = allProduct[product3Index].src;
image1.alt = allProduct[product1Index].name;
image2.alt = allProduct[product2Index].name;
image3.alt = allProduct[product3Index].name

allProduct[product1Index].view++;
allProduct[product2Index].view++;
allProduct[product3Index].view++;

}

function handleProductClick () {
let clickedProduct = event.targe.alt;

if (event.target === productContainer)
{alert ('Please click on an image.');
}
else {
rendorProduct();
}
for (let i = 0; i < allProduct.length; i++) {
if (clickedProduct === allProduct[i].name){
allProduct[i].clicks++;
break;
}
}
}



const allProduct = [
let bag = new product ("bag", "./images/bag.jpg");
let banana = new product("banana", "./images/banana.jpg");
let bathroom = new product("bathroom", "./images/bathroom.jpg");
let boots = new product("boots", "./images/boots.jpg");
let breakfast = new product("breakfast", "./images/breakfast.jpg");
let bubblegum = new product("bubblegum", "./images/bubblegum.jpg");
let chair = new product("chair", "./images/chair.jpg");
let cthulhu = new product("cthulhu", "./images/cthulhu.jpg");
let dog = new product("dog", "./images/dog-duck.jpg");
let dragon = new product("dragon", "./images/dragon.jpg");
let pen = new product("pen", "./images/pen.jpg");
let pet = new product("pet", "./images/pet-sweep.jpg");
let scissors = new product("scissors", "./images/scissors.jpg");
let shark = new product("shark", "./images/shark.jpg");
let sweep = new product("sweep", "./images/sweep.png");
let tauntaun = new product("tauntaun", "./images/tauntaun.jpg");
let unicorn = new product("unicorn", "./images/unicorn.jpg");
let water = new product("water", "./images/water-can.jpg");
let wine = new product("wine", "./images/wine-glass.jpg");
];

productContainer.addeventlistener ('click', handleProductClick);
rendorProduct
