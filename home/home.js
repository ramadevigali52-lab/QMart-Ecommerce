let productsAvailable = [];

function fetchingData() {
  fetch("https://dummyjson.com/products")
    .then((result) => {
      // console.log(result);
      return result.json();
    })
    .then((val) => {
      // console.log(val.products);
      productsAvailable = val.products;
      localStorage.setItem("allproducts", JSON.stringify(productsAvailable));
      displayProduct(productsAvailable);
    });
}
fetchingData();

function displayProduct(prod) {
  let output = "";
  prod.map((val, index) => {
    output += `
        <main>
        <div id="image">
        <img src="${val.thumbnail}" />
        </div>
        <div class="content">
            <h2>${val.title}</h2>
            <section>
              <div class="row">
                <button class="rating">
                   Rating: ${val.rating}
                </button>
                <span class="price">
                  ₹${val.price}
                </span>
              </div>
              <div class="row">
                <span>
                  In stock: ${val.stock}
                </span>
                <button onclick="details(${val.id})">details
                </button>
              </div>
            </section>
          </div>
        </main>
        `
  });
  document.getElementById("productContainer").innerHTML = output;
}

document.getElementById("SearchProduct").addEventListener("input", (e) => {
  let searchTerm = e.target.value.toLowerCase();
  let filteredProduct = productsAvailable.filter((v) => {
    return (
      v.title.toLowerCase().includes(searchTerm) ||
      v.category.toLowerCase().includes(searchTerm)
    );
  });
  displayProduct(filteredProduct);
});


function details(productId){
//console.log(productId);
localStorage.setItem("pid",productId);
window.location.href="../details/details.html";   
}