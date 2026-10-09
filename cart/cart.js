// document.addEventListener("DOMContentLoaded",()=>{
//     displaycart();
// })

// function displaycart(){
//     let cart = JSON.parse(localStorage.getItem("cart"))  || [];
//     let cartcontent = document.getElementById("cartcontent");
//     let totalprice = document.getElementById("totalprice");
//     console.log(cart,cartcontent,totalprice);
// }

// let totalBill=0;
// cartcontent.innerHTML="";

// if(cart.length==0){
//     cartcontent.innerHTML=`<p>Your Cart is Empty Start Shopping.....</p>`
// }else{
//     cart.map((val,index)=>{
//     totalBill  +=  (val,price)*90;
//     let newElement=document.createElement("div");
//     newElement.setAttribute("class","prod-info");
//     newElement.innerHTML=`
//     <h1>${val.title}</h1>
//     `;
//     cartcontent.append(newElement);
//     totalprice.innerHTML=`
//     <h1>Your Total Bill is ${totalBill.toFixed(2)}</h1>`
//     });
// }



document.addEventListener("DOMContentLoaded", ()=>{
  displayCart();
})

function displayCart(){
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  let cartContent=document.getElementById("cartContent");
  let totalPrice=document.getElementById("totalPrice");
  // console.log(cart, cartContent, totalPrice);
  
  let totalBill=0;
  cartContent.innerHTML="";

  if(cart.length==0){
    cartContent.innerHTML=` <p>Your cart is Empty. Start shopping...</p> `   
  }else{
    cart.map((val, index)=>{
      totalBill+=val.price*90;
      let newElement=document.createElement("div");
      newElement.setAttribute("class", "prod-info");
      newElement.innerHTML=`
       <main>
        <img src="${val.thumbnail}" />
        <div class="details">
            <h2>${val.title}</h2>
            <p>Availability: ${val.availabilityStatus}</p>
            <p>Category: ${val.category}</p>
            <p>Return Policy: ${val.returnPolicy}</p>
            <p>Shipping Information: ${val.shippingInformation}</p>
            <p>Stock: ${val.stock}</p>
            <p>Warranty Information: ${val.warrantyInformation}</p>
            <p>Price: ₹${val.price}</p>
        </div>
        <button onClick="removeFromCart(${index})">Remove</button>
      </main>
      `;
      cartContent.append(newElement);
      totalPrice.innerHTML=`
      <h2>Your total Bill is ${totalBill.toFixed(2)}</h2>
      `;
    } );
  }
}

function removeFromCart(index){
    // console.log(index);
    let cart=JSON.parse(localStorage.getItem("cart"));
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    window.location.reload();
    
}