const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
let productNames = [];
let productViews = [];
let productClicks = [];
let userClicks = 0;
let maxClicks = 25;

const products = [];

function Product(name, views, clicks) {
  this.name = name;
  this.src = `./images/${name}.jpg`;
  this.views = views;
  this.clicks = clicks;

  products.push(this);
}

function checkLocal() {
  const clicksFromLocalStorage = JSON.parse(localstorage.getItem("clicks"));
}

if (localStorage.getItem("products") === null) {
  new Product("bag", 0, 0);
  new Product("banana", 0, 0);
  new Product("bathroom", 0, 0);
  new Product("boots", 0, 0);
  new Product("breakfast", 0, 0);
  new Product("bubblegum", 0, 0);
  new Product("chair", 0, 0);
  new Product("cthulhu", 0, 0);
  new Product("dog-duck", 0, 0);
  new Product("dragon", 0, 0);
  new Product("pen", 0, 0);
  new Product("pet-sweep", 0, 0);
  new Product("scissors", 0, 0);
  new Product("shark", 0, 0);
  new Product("sweep", 0, 0);
  new Product("tauntaun", 0, 0);
  new Product("unicorn", 0, 0);
  new Product("water-can", 0, 0);
  new Product("wine-glass", 0, 0);
} else {
  const productsLS = JSON.parse(localStorage.getItem("products"));

  for (let i = 0; i < productsLS.length; i++) {
    new Product(productsLS[i].name, productsLS[i].views, productsLS.clicks[i]);
  }
}

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
    alert("You have no more votes left!");
    renderChart();
    localStorage.setItem("products", JSON.stringify(products));
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

  for (let i = 0; i < products.length; i++) {
    names.push(products[i].name);
    views.push(products[i].views);
    clicks.push(products[i].clicks);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: names,
      datasets: [
        {
          label: "# of views",
          data: views,
          borderWidth: 2,
        },
        {
          label: "# of clicks",
          data: clicks,
          borderWidth: 2,
        },
      ],
    },
  });
}
===============
function Character(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Character.prototype.attack = function () {
  console.log(`${this.name} attacks with their ${this.weapon}`);
};

const charactersArray = [];

function checkLocal() {
  Character.prototype.attack = function () {
    console.log(`${this.name} attacks with their ${this.weapon}`);
  };

  const charactersArray = [];

  function checkLocal() {
    const charsFromLS = JSON.parse(localStorage.getItem("characters"));

    // if that exists:
    if (charsFromLS) {
      // reinstantiate my array of objects one by one
      for (let i = 0; i < charsFromLS.length; i++) {
        const newChar = new Character(
          charsFromLS[i].name,
          charsFromLS[i].weapon
        );
        charactersArray.push(newChar);
      }
    } else {
      // if it doesn't exist:
      // create our characters
      const char1 = new Character("Tim the Preposterous", "nunchucks");
      const char2 = new Character("GJ the Wise", "bowstaff");
      const char3 = new Character("Vicky the Great", "Sarcasm");
      const char4 = new Character("Demie the Demi-god", "big ol' gun");

      // add them to our array
      charactersArray.push(char1, char2, char3, char4);

      // put our characters array into local storage
      putIntoLocalStorage();
    }
  }

  // put that array into localStorage after stringifying it
  function putIntoLocalStorage() {
    const charactersStringified = JSON.stringify(charactersArray);
    localStorage.setItem("characters", charactersStringified);
  }

  checkLocal();
}
