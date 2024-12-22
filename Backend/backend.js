let fooditems=[
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
                    <button class="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#editCart" onclick="editItem(${fooditems.id})" >Edit</button>
                    <button class="btn btn-danger m-2 " onclick="deleteItem(${fooditems.id})" >Delete</button>
                    
                    </div>
                    </div>
                </div>
    </div>

    
    
    `).join("");
}
renderProduct();

function saveToLocalStrorage(){
    localStorage.setItem("food Itmes",JSON.stringify(fooditems))
}

saveToLocalStrorage();

//Delete item
function deleteItem(id){
    fooditems=fooditems.filter((p)=>p.id!=id);
    renderProduct(fooditems);
    saveToLocalStrorage();

}

//edit item
function editItem(id){
    item=fooditems.find((p)=>p.id==id);
    console.log(id);
    
    console.log(item);
    

    if(item){
    
    document.getElementById('itemNameEditModal').value= item.itemName;
     document.getElementById('itemDiscriptionEditModal').value=item.discription;
    document.getElementById('itemPriceEditModal').value= item.price;
     document.getElementById('itemImagePathEditModal').value=item.imagepath;
}

 updateProducts();
 saveToLocalStrorage();

//  alert("Your Product has Been Edited");

}

function updateProducts(){
   
    item.itemName=document.getElementById('itemNameEditModal').value;
    item.discription=document.getElementById('itemDiscriptionEditModal').value;
    item.price=document.getElementById('itemPriceEditModal').value;
    item.imagepath=document.getElementById('itemImagePathEditModal').value;
   


renderProduct();




}







function  clearInput(){
    document.getElementById('itemName').value= "";
    document.getElementById('itemDiscription').value="";
   document.getElementById('itemPrice').value= "";
    document.getElementById('itemImagePath').value="";
}

// Add New Product

function addproduct() {
    let newProduct = {
        id: fooditems.length + 1,
        itemName: document.getElementById('itemName').value,
        discription: document.getElementById('itemDiscription').value,
        price: document.getElementById('itemPrice').value,
        imagepath: document.getElementById('itemImagePath').value,

    }
    console.log(newProduct);

    fooditems.push(newProduct);
    renderProduct();
   
    clearInput();
    saveToLocalStrorage();
    alert("Your Product Has Been Added");
};

// search 
searchInput.addEventListener('input',()=>{
   let  searchKey=event.target.value.toLowerCase();
   filtereditems=fooditems.filter((p)=>p.itemName.toLowerCase().includes(searchKey));
   console.log(filtereditems);
   console.log(searchKey);
   renderProduct(filtereditems);
   

   

})