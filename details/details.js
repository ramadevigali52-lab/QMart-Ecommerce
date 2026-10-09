// document.addEventListener("DOMContentLoaded", () => {

//     let allproducts = JSON.parse(localStorage.getItem("allproducts"));
//     let pid = localStorage.getItem("pid");
//     let productdetails = document.getElementById("productdetails");

//     console.log(allproducts, pid, productdetails);

//     if (allproducts && pid && productdetails) {

//         let selectedProduct = allproducts.find((val) => {
//             return val.id == pid;
//         });

//         console.log(selectedProduct);

//         if (selectedProduct) {

//             productdetails.innerHTML = `
//                 <main>
//                     <h1>${selectedProduct.title}</h1>

//                     <p>Brand: ${selectedProduct.brand}</p>

//                     <p>Category: ${selectedProduct.category}</p>

//                     <p>
//                         Description: ${selectedProduct.description}
//                     </p>

//                     <p>
//                         Price: ₹ ${selectedProduct.price}
//                     </p>

//                     <button>ADD TO CART</button>
//                     <button>BUY NOW</button>
//                 </main>
//             `;

//         } else {

//             productdetails.innerHTML = `
//                 <p>Product not found.........</p>
//             `;

//         }

//     } else {

//         console.log("productdetails element not found");

//     }

// });



document.addEventListener("DOMContentLoaded", () => {

    let allproducts = JSON.parse(localStorage.getItem("allproducts"));
    let pid = localStorage.getItem("pid");

    let productdetails = document.getElementById("productdetails");

    console.log(allproducts);
    console.log(pid);
    console.log(productdetails);

    if (allproducts && pid) {

        let selectedProduct = allproducts.find((val) => {
            return val.id == pid;
        });

        console.log(selectedProduct);

        if (selectedProduct) {

            productdetails.innerHTML = `

                <div class="product-details">

                    <div class="product-image-section">

                        <img 
                            src="${selectedProduct.thumbnail}" 
                            alt="${selectedProduct.title}"
                            class="main-image"
                        >

                        

                     </div>


                    <div class="product-content">

                        <h1>${selectedProduct.title}</h1>

                        <h3>Brand: ${selectedProduct.brand}</h3>

                        <h3>Category: ${selectedProduct.category}</h3>

                        <p>
                            Description: ${selectedProduct.description}
                        </p>

                        <h2>
                            Price: ₹${selectedProduct.price}
                        </h2>

                        <div id="buttons">

                            <button id="cart-btn">
                                ADD TO CART
                            </button>

                            <button id="back-btn">
                                BACK TO HOME
                            </button>

                        </div>

                    </div>

                </div>


                <div class="reviews">

                    <h2>Customer reviews</h2>

                    ${selectedProduct.reviews.map((review) => {

                        return `

                            <div class="review">

                                <div class="stars">
                                    ${"❤️".repeat(5)}
                                </div>

                                <h4>
                                    ${review.reviewerName}
                                </h4>

                                <p>
                                    ${review.comment}
                                </p>

                                <small>
                                    ${review.date}
                                </small>

                            </div>

                        `;

                    }).join("")}

                </div>

            `;
            
        document.getElementById("back-btn").addEventListener("click",()=>{
            window.location.href="../home/home.html";
        });

        document.getElementById("cart-btn").addEventListener("click",()=>{
            addToCart(selectedProduct);
        });

        } 
        else {

            productdetails.innerHTML = `
                <p>Product not found.........</p>
            `;

        }

    } 
    else {

        productdetails.innerHTML = `
            <p>Page not found........</p>
        `;

    }

});


function addToCart(product){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("product added successfully")
}


