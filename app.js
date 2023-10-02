let productContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");
function Product(name, src) {
  this.name = name;
  this.src = src;
  this.view = 0;
  this.clicks = 0;
}

function getRandomIndex() {
  return Math.floor(Math.random() * allProduct.length);
}

function renderProduct() {
  let product1Index = getRandomIndex();
  let product2Index = getRandomIndex();
  let product3Index = getRandomIndex();

  while (
    product1Index === product2Index ||
    product2Index === product3Index ||
    product1Index === product3Index
  ) {
    product1Index = getRandomIndex();
    product2Index = getRandomIndex();
    product3Index = getRandomIndex();
  }

  image1.src = allProduct[product1Index].src;
  image2.src = allProduct[product2Index].src;
  image3.src = allProduct[product3Index].src;
  image1.alt = allProduct[product1Index].name;
  image2.alt = allProduct[product2Index].name;
  image3.alt = allProduct[product3Index].name;

  allProduct[product1Index].views++;
  allProduct[product2Index].views++;
  allProduct[product3Index].views++;
}

function handleProductClick(event) {
  let clickedProduct = event.target.alt;

  if (event.target === productContainer) {
    alert("Please select an image.");
  } else {
    rendorProduct();
  }
  for (let i = 0; i < allProduct.length; i++) {
    if (clickedProduct === allProduct[i].name) {
      allProduct[i].clicks++;
      break;
    }
  }
}

const allProduct = [
  new product("bag", "./images/bag.jpg"),
  new product("banana", "./images/banana.jpg"),
  new product("bathroom", "./images/bathroom.jpg"),
  new product("boots", "./images/boots.jpg"),
  new product("breakfast", "./images/breakfast.jpg"),
  new product("bubblegum", "./images/bubblegum.jpg"),
  new product("chair", "./images/chair.jpg"),
  new product("cthulhu", "./images/cthulhu.jpg"),
  new product("dog", "./images/dog-duck.jpg"),
  new product("dragon", "./images/dragon.jpg"),
  new product("pen", "./images/pen.jpg"),
  new product("pet", "./images/pet-sweep.jpg"),
  new product("scissors", "./images/scissors.jpg"),
  new product("shark", "./images/shark.jpg"),
  new product("sweep", "./images/sweep.png"),
  new product("tauntaun", "./images/tauntaun.jpg"),
  new product("unicorn", "./images/unicorn.jpg"),
  new product("water", "./images/water-can.jpg"),
  new product("wine", "./images/wine-glass.jpg"),
];

productContainer.addeventlistener("click", handleProductClick);

rendorProduct();
