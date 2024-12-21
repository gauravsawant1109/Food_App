let fooditems = [
    { id: 1, itemName: "Pizza", discription: "Chezzy Pizza", price: 200, imagepath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png    ",quantity:5,totalPrice:0, },
    { id: 2, itemName: "Biryani", discription: "Dum Biryani", price: 200, imagepath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",quantity:5, },
    { id: 3, itemName: "Burger", discription: "Veg Burger", price: 200, imagepath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",quantity:5, },
    { id: 4, itemName: "Rolls", discription: "Egg Rolls", price: 200, imagepath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",quantity:5, },
    { id: 5, itemName: "Chinese", discription: "Veg Chinese", price: 200, imagepath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png",quantity:5, },
    { id: 6, itemName: "Pasta", discription: "Chezzy Pasta", price: 200, imagepath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png",quantity:5, },
    { id: 7, itemName: "Pakoda", discription: "Spicy Pakoda", price: 200, imagepath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pakoda.png",quantity:5, },
    { id: 8, itemName: "Salad", discription: "Tasty salad", price: 200, imagepath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png",quantity:5, },
    { id: 9, itemName: "Kachori", discription: "Indory Kachori", price: 200, imagepath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kachori.png",quantity:5, },
    { id: 10, itemName: "Momos", discription: "Steam Momos", price: 200, imagepath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png",quantity:5, }

];

function renderProduct(filtereditems = fooditems) {
    document.getElementById('product').innerHTML = filtereditems.map((fooditems) => `
    <div class="d-flex justify-content-center  mt-2 text-center">
          <div class="card" style="width: 18rem;">
                    <img src="${fooditems.imagepath}" class="card-img-top" alt="${fooditems.itemName}">
                    <div class="card-body">
                    <h5 class="card-title">${fooditems.itemName}</h5>
                    <h5 class="card-title">${fooditems.discription}</h5>
                    <p class="card-text ">Price : ₹ ${fooditems.price}</p>
                    <div class="d-flex justify-content-evenly">
                    <button class="btn btn-primary m-2" onclick="favourite(${fooditems.id})" >Favourite</button>
                    <button class="btn btn-warning m-2 " onclick="bag(${fooditems.id})" >Add to Bag</button>
                    
                    </div>
                    </div>
                </div>
    </div>

    
    
    `).join("");

    

    

  
}

renderProduct();
// showResultaddToCArtItem();



function saveToLocalStrorage() {
    localStorage.setItem("food_item", JSON.stringify(fooditems));

   
}


///AddToCart Product

// function addproduct() {
//     let newProduct = {
//         id: fooditems.length + 1,
//         itemName: document.getElementById('itemName').value,
//         discription: document.getElementById('itemDiscription').value,
//         price: document.getElementById('itemPrice').value,
//         imagepath: document.getElementById('itemImagePath').value,

//     }
//     console.log(newProduct);

//     fooditems.push(newProduct);
//     renderProduct();
   
//     clearInput();
//     saveToLocalStrorage();
//     alert("Your Product Has Been Added");
// };

function clearInput() {
    document.getElementById('itemName').value = "";
    document.getElementById('itemPrice').value = "";
    document.getElementById('itemDiscription').value = "";
    document.getElementById('itemImagePath').value = "";

}


// favourite Items 
let favItem = [];

function favourite(id) {
    const fav = fooditems.find((item) => item.id === id);
    // fav.quantity=Number(prompt(`Enter ${fav.itemName} Quantity `));

    favItem.push(fav);
    
    console.log("favourite cart",fav);
    console.log("favourite array", favItem);
   
    document.getElementById('cartLength').innerHTML=favItem.length;

    favProduct(favItem);
   
    alert(`${fav.itemName} is Added in Favourite`);

    localStorage.setItem('to_the_favourite', JSON.stringify(favItem));  // saveToLocalStrorage();

}


function favProduct(favItem){
    
    document.getElementById('favitem').innerHTML = favItem.map((item) => `
    <div class="d-flex justify-content-center text-center">
           <div class="card" style="width: 18rem;">
                     <img src="${item.imagepath}" class="card-img-top" alt="${item.itemName}">
                     <div class="card-body">
                    <h5 class="card-title">${item.itemName}</h5>
                     <h5 class="card-title">${item.discription}</h5>
                     <p class="card-text ">Price : ₹ ${item.price}</p>
                     <button class="btn btn-danger" onclick="removefav(${item.id})">Remove</button>
                    
                 </div>
     </div>
    
    `).join("");
  
    toSaveFavourite();

  
 
};




function removefav(id){
    favItem=favItem.filter((p)=>p.id!=id);
    document.getElementById('cartLength').innerHTML=favItem.length;
    favProduct(favItem);
    saveToLocalStrorage();
    showResultFavItem();
    // toSaveFavourite();
    

}

function toSaveFavourite(){
    JSON.parse(localStorage.getItem('to_the_favourite')); 
    
    showResultFavItem();
    // saveToLocalStrorage();
    // renderProduct();
}


// favourite list none result
function showResultFavItem(){
    if(favItem.length===0){
        document.getElementById('result').innerHTML ="No Item Found";

    }

    saveToLocalStrorage();
};

showResultFavItem();


//search Operation

searchInput.addEventListener('input', () => {
    let searchKey = event.target.value.toLowerCase();
    filtereditems = fooditems.filter((item) => item.itemName.toLowerCase().includes(searchKey));

    // if(filtereditems==[]){
    //     document.getElementById("searchResult").innerHTML="No item Found"
    // }

    renderProduct(filtereditems);
    saveToLocalStrorage();
    // showResultaddToCArtItem();
});


//AddToCart Item 

let AddToCart=[];

function bag(id){
    Crt=fooditems.find((itm)=>itm.id == id);
    Crt.quantity=Number(prompt(`Enter ${Crt.itemName} Quantity`));
   
    console.log("cart ",Crt);
    console.log( " cart quantity",Crt.quantity);
    AddToCart.push(Crt)
    console.log("AddToCart Array",AddToCart);
    
    document.getElementById('addToCartLength').innerHTML=AddToCart.length;

    AddToCartReander(AddToCart);
    
    saveToLocalStrorage();  

    alert(`${Crt.itemName} is Added in Bag`);
  
    
};

function AddToCartReander(AddToCart){
    
    document.getElementById('AddToCartitem').innerHTML = AddToCart.map((item) => `
    <div class="d-flex justify-content-center text-center">
           <div class="card" style="width: 18rem;">
                     <img src="${item.imagepath}" class="card-img-top" alt="${item.itemName}">
                     <div class="card-body">
                    <h5 class="card-title">${item.itemName}</h5>
                     <h5 class="card-title">${item.discription}</h5>
                     <p class="card-text ">Price : ₹ ${item.price}</p>
                     
                     <h5 class="card-text ">quantity : ₹ ${item.quantity}</h5>
                    
                     <button class="btn btn-danger" onclick="removeCart(${item.id})">Remove</button>
                    
                 </div>
     </div>
    
    `).join("");
    // totalPrice();
    toSaveFavourite();
 
};

function removeCart(id){
    AddToCart=AddToCart.filter((p)=>p.id!=id);
    AddToCartReander(AddToCart);
    document.getElementById('addToCartLength').innerHTML=AddToCart.length;
    saveToLocalStrorage();
    showResultaddToCArtItem();
    // toSaveFavourite();

};
function showResultaddToCArtItem(){
    if(AddToCart.length===0){
        document.getElementById('AddToCArtresult').innerHTML ="No Item Found";

    }

    saveToLocalStrorage();
};

showResultaddToCArtItem();

// function totalPrice(){
//     total=AddToCart.reduce((sum,cart)=> sum+(Quantity*cart.price));
   
//     console.log(total);
//     document.getElementById("total").innerHTML="Total Price",total
    
// };

// totalPrice();

function login(){
    
    alert("Login Succefully");
}