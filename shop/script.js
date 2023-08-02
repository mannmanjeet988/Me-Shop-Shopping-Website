// const produtc = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };

const searchBar = (document.getElementById("searchBar"))

const itemSection = document.getElementsByClassName("items");
//const endpoint="https://fakestoreapi.com/products";
let products = [];

// Note : Click on MENU  OR   YOUR RESTAURANT MENU , you will be directed to Menu(another) page
// To fetch Men's clothing data
async function getMenu() {
  try {
    const response = await fetch(endpoint, { method: "GET" });
    products = await response.json();
    localStorage.setItem("products", JSON.stringify(products));
    const items = products;
    //console.log(data);
    renderDataOnUI(items);
    //thankyouFnc();
    console.log(items);
    // return items;
  } catch (error) {
    console.log(error.message);
  }
}

getMenu();

async function getMenu1() {
  try {
    const response = await fetch(endpoint, { method: "GET" });
    products = await response.json();
    const items = products.slice(0, 4);
    //console.log(data);
    renderDataOnUI(items);
    //thankyouFnc();
    console.log(items);
    // return items;
  } catch (error) {
    console.log(error.message);
  }
}

// To fetch jewellery items
async function getMenu2() {
  try {
    const response = await fetch(endpoint, { method: "GET" });
    fetchedData = await response.json();
    const items = fetchedData.slice(4, 8);
    //console.log(data);
    renderDataOnUI(items);
    //thankyouFnc();
    console.log(items);
    // return items;
  } catch (error) {
    console.log(error.message);
  }
}

// To fetch Electronics items
async function getMenu3() {
  try {
    const response = await fetch(endpoint, { method: "GET" });
    fetchedData = await response.json();
    const items = fetchedData.slice(8, 14);
    //console.log(data);
    renderDataOnUI(items);
    //thankyouFnc();
    console.log(items);
    // return items;
  } catch (error) {
    console.log(error.message);
  }
}

// To fetch Women's clothing data
async function getMenu4() {
  try {
    const response = await fetch(endpoint, { method: "GET" });
    fetchedData = await response.json();
    const items = fetchedData.slice(14);
    //console.log(data);
    renderDataOnUI(items);
    //thankyouFnc();
    console.log(items);
    // return items;
  } catch (error) {
    console.log(error.message);
  }
}

function renderDataOnUI(data) {
  const itemSection = document.getElementById("items");
  itemSection.innerHTML = ``;
  if (data.length == 0) {
    itemSection.innerHTML = `
      <h3>Sorry No products Available</h3>
    `;
    return;
  }
  data.forEach((product) => {
    const item = document.createElement("div");
    item.className = "item";
    // const{name,price,imgSrc}=ITEM;
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
                  <button id="addBtn-${product.id}">Add to Cart</button>`;

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

searchBar.addEventListener("input",(event)=>{
  let searchedProduct = searchBar.value.toLowerCase().trim();
  let filteredProducts= products.filter((product)=>{
    return(product.title.toLowerCase().includes(searchedProduct))
  });
  console.log(filteredProducts)
  renderDataOnUI(filteredProducts);
})

function applyfilters(){
  console.log("high");
 let ratingvalue = Number (document.querySelector(".sidenav>section:nth-child(2)>input").value);
 let $0to25 = document.querySelector("#firstP").checked;
 let $25to50 = document.querySelector("#secondP").checked;
 let $50to100= document.querySelector("#thirdP").checked;
 let $100plus = document.querySelector("#lastP").checked;

 let filteredarr = [];
 for(let product of products){
     if(Math.round (product.rating.rate) >= ratingvalue){
         filteredarr.push(product);

         if($0to25 && (product.price<0 || product.price>25)){
             filteredarr.pop(product);
         }
         else if($25to50 && (product.price<25 || product.price>50)){
             filteredarr.pop(product);
         }
         else if($50to100 && (product.price<50 || product.price>100)){
             filteredarr.pop(product);
         }
         else if($100plus && product.price<100){
             filteredarr.pop(product);
         }
     }
     
 }

renderDataOnUI(filteredarr);
}