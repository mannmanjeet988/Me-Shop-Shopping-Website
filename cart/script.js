let cartProducts = JSON.parse(sessionStorage.getItem("cartProducts"));
console.log(cartProducts)

function renderDataOnUI(cartProducts) {
    const itemSection = document.getElementsByClassName("items")[0];
    const message = document.getElementById("msg");
     itemSection.innerHTML = ``;
    if(cartProducts.length===0){
      message.style.display="block";
      document.getElementById("checkout-btn").style.display="none";
    }
    //message.style.display="none";
    cartProducts.forEach((product) => {
      message.style.display="none";
      const item = document.createElement("div");
      item.className = "item";

      item.innerHTML = `
                    <img src=${product.image} alt="Item" />
                    <div class="info">
                    <div class="item-name">${product.title}</div>
                      <div class="row">
                        <div class="price">$${product.price}</div>
                        <div class="sized">S,M,L</div>
                      </div>
                      <div class="colors">
                        Colors:
                        <div class="row">
                         
                          <div class="circle" style="background-color: #000"></div>
                          <div class="circle" style="background-color: #4938af"></div>
                          <div class="circle" style="background-color: #203d3e"></div>
                        </div>
                      </div>
                      <div class="row">Rating: ${printratingstars(product.rating.rate)}</div>
                    </div>
                    <button id="addBtn-${product.id}" onclick="removeFromCartFunc(event)">Remove From Cart</button>`;
  
      itemSection.appendChild(item);
    });
  }

  function printratingstars(rating) {
    rating = Math.round(rating);
    let str = "";
    for (let i = 0; i < rating; i++) {
        str += "⭐";
    }
    return str;
  }

  //to remove items from cart
  function removeFromCartFunc(event){

    let str = event.target.innerText;
    let id = Number (event.target.getAttribute('id').split('-')[1]);
    console.log('id',id);
    let cartProducts=JSON.parse(sessionStorage.getItem("cartProducts"));
    // if(str=="Remove From Cart"){
    //     updatedCart = cartProducts.filter((item) => item.id !== id);
    // }
    updatedCart = cartProducts.filter((item) => item.id !== id);
    //localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    sessionStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    renderDataOnUI(updatedCart)
    printCheckList(updatedCart);
      console.log(cartProducts);
  }
  renderDataOnUI(cartProducts);

  function printCheckList(cartProducts){
    console.log(cartProducts);

     const checkOutContainer = document.getElementsByClassName("side-conatiner")[0];
     checkOutContainer.innerHTML=`<div class="checkout-list" style="text-align:center; border-bottom:1px solid white;">
              <h3>Checkout List<h3>
            </div>`;
    
    cartProducts.forEach((product) => {
      const item = document.createElement("div");
      item.className = "checkOut";

      item.innerHTML = `
      <div class="items-details">
        <div id="item-name">${product.title}</div>
        <div id="item-amount">$${product.price}</div>  
      </div>`
     checkOutContainer.appendChild(item);         
  })
  const totalContainer1 = document.createElement("div");
  totalContainer1.className="total1";
  totalContainer1.innerHTML=
  `<div id="total-heading">Total(USD)</div>
  <div id="total-amount">${findTotal(cartProducts)}</div>`;

  const totalContainer2 = document.createElement("div");
  totalContainer2.className="total2";
  totalContainer2.innerHTML=
  `<div id="total-heading">Total(Rs.)</div>
  <div id="total-amount">Rs.${findTotalinRs(cartProducts)}</div>`;
  checkOutContainer.appendChild(totalContainer1);
  checkOutContainer.appendChild(totalContainer2);

  // const btn = document.createElement("button");
  // btn.setAttribute=("id","checkout-btn")
  // // btn.setAttribute("onclick",)
  // btn.innerText= `Click To Checkout`;
  // checkOutContainer.appendChild(btn); 
}
printCheckList(cartProducts);


function findTotal(cartProducts){
    let totalamount=0;
    cartProducts.forEach((product) =>{
           totalamount+=(product.price)
    })
    console.log(totalamount);
    return totalamount.toFixed(2);
}
findTotal(cartProducts);

function findTotalinRs(cartProducts){
    totalamount=1;
    let amount=findTotal(cartProducts);
    totalamount=(amount*80).toFixed(2);
    console.log(totalamount);
    return totalamount;
}
findTotalinRs(cartProducts);

//function to proceed to checkout
 document.getElementById("checkout-btn").addEventListener("click",()=>{
    localStorage.setItem('total', JSON.stringify(findTotalinRs(cartProducts)));
    cartProducts = [];
    renderDataOnUI(cartProducts);
    printCheckList(cartProducts);
    window.open("../razorpay", "_blank");
})