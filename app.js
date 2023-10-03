const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
let productNames = [];
let productViews = [];
let productClicks = [];
let userClicks = 0;
let maxClicks = 5;

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

  image1.src = products[prod1].src;
  image2.src = products[prod2].src;
  image3.src = products[prod3].src;
  image1.alt = products[prod1].name;
  image2.alt = products[prod2].name;
  image3.alt = products[prod3].name;

  products[prod1].views++;
  products[prod2].views++;
  products[prod3].views++;
}

function handleProductClick(event) {
  if (userClicks === maxClicks) {
    alert("You have run out of votes");
    renderChart();
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

image1.addEventListener("click", handleProductClick);
image2.addEventListener("click", handleProductClick);
image3.addEventListener("click", handleProductClick);

function showResults() {
  const results = document.getElementById("results");

  for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    const product = products[i];
    li.textContent = `${product.name} was viewed ${product.views} times, and clicked ${product.clicks} times`;
    results.appendChild(li);
  }
}

const viewResults = document.getElementById("view-results");
viewResults.addEventListener("click", showResults);

renderProducts();

function renderChart() {
  const ctx = document.getElementById("myChart");

  const names = [];
  const views = [];
  const clicks = [];

  productNames.push(products.names);
  productViews.push(products.views);
  productClicks.push(products.clicks);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: names,
      datasets: [
        {
          label: "# of views",
          data: views,
          borderWidth: 1,
        },
        {
          label: "# of clicks",
          data: clicks,
          borderWidth: 1,
        },
      ],
    },
  });
}

