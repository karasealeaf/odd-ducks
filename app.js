const ctx = document.getElementById("myChart");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
let productNames = [];
let productViews = [];
let productClicks = [];
image1.addEventListener("click", handleProductClick);

let userClicks = 0;
let maxClicks = 25;

function Product(name) {
  this.name = name;
  this.src = `./images/${name}.jpg`;
  this.view = 0;
  this.clicks = 0;
}

const products = [
  new Product("bag"),
  new Product("banana"),
  new Product("bathroom"),
  new Product("boots"),
  new Product("breakfast"),
  new Product("bubblegum"),
  new Product("chair"),
  new Product("cthulhu"),
  new Product("dog-duck"),
  new Product("dragon"),
  new Product("pen"),
  new Product("pet-sweep"),
  new Product("scissors"),
  new Product("shark"),
  new Product("sweep"),
  new Product("tauntaun"),
  new Product("unicorn"),
  new Product("water-can"),
  new Product("wine-glass"),
];

function randomProdIdx() {
  return Math.floor(Math.random() * products.length);
}

function renderProducts() {
  let prod1 = randomProdIdx();
  let prod2 = randomProdIdx();
  let prod3 = randomProdIdx();

  while (prod1 === prod2 || prod1 === prod3 || prod2 === prod3) {
    prod2 = randomProdIdx();
    prod3 = randomProdIdx();
  }
  console.log(prod1, prod2, prod3);
  image1.src = products[prod1].src;
  image2.src = products[prod2].src;
  image3.src = products[prod3].src;
  image1.alt = products[prod1].name;
  image2.alt = products[prod2].name;
  image3.alt = products[prod3].name;
  image1.addEventListener("click", handleProductClick);
  image2.addEventListener("click", handleProductClick);
  image3.addEventListener("click", handleProductClick);

  products[prod1].views++;
  products[prod2].views++;
  products[prod3].views++;
}

const pictures = [Product].sort(function (image1, image2, image3) {
  return Math.floor(Math.random() * 3) - 1;
});

// let images = [image1, image2, image3];
// let prevIndex;

// function randImg() {
//   let size = images.length;
//   let randomIndex = Math.floor(size * Math.random());

//   if (prevIndex === randomIndex) {
//     console.log("last image already used index " + prevIndex);
//     while (prevIndex === randomIndex) {
//       randomIndex = Math.floor(size * Math.random());
//       console.log("changing index to " + randomIndex);
//     }
//   }

//   prevIndex = randomIndex;
//   console.log("new image: " + images[randomIndex]);
// }

function handleProductClick(event) {
  if (userClicks === maxClicks) {
    alert("You have run out of votes!");
    return;
  }

  userClicks++;

  let clickedProduct = event.target.alt;

  for (let i = 0; i < products.length; i++) {
    if (clickedProduct === products[i].name) {
      products[i].clicks++;
      break;
    }
  }
  renderProducts();
}

function showResults() {
  console.log("show results");
  const results = document.getElementById("results");

  for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    const product = products[i];
    li.textContent = `${product.name} was viewed ${product.views} times, and clicked ${product.clicks} times`;
    results.appendChild(li);
    productNames.push(products.name);
    productViews.push(products.views);
    productClicks.push(products.clicks);
  }
  new chart(ctx, config);
}
const config = {
  type: "bar",
  data: {
    labels: productNames,
    datasets: [
      {
        label: "# of votes",
        data: productClicks,
        borderWidth: 6,
        backgroundColor: ["skyblue"],
      },
    ],
  },
};

const viewResults = document.getElementById("view-results");
viewResults.addEventListener("click", showResults);

renderProducts();
