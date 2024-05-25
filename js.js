// function Product (price,tax,vat) {
//     var finalPrice=price+(price*tax)+vat
//     console.log(finalPrice);
// }
// Product(5000,0.2,600)


// Product(200,0.1,300)



// var num1=Number(window.prompt("please enter first number"))
// var num2=Number(window.prompt("please enter second number"))

// function Calc(x,y) {
//     var sum=x+y;
//     console.log(sum);
// }

// Calc(num1,num2)



//  function Cal(x,y) {
//     return x+y
//  }
// var test=Cal(20,30)
// console.log(test);


// function Cal(x,y) {
//     return x+y;
    
// }
// var sum=Cal(20,20)

// console.log(sum);

// function Avg (sum) {
//     console.log(sum/2);
// }
// Avg(sum)



// var x="nour";

// (function () {
// var x=30
// console.log(x);

// }) ()

// console.log(x);














// var fName=document.getElementById("FirstName");
// var lName=document.getElementById("LastName");
// console.log(fName);
// console.log(lName);

// function test() {
//     console.log("hi", fName.value, lName.value);
// }


// objects

// var product={
//     Name:"Decorative",
//     Price: "300",
//     Category:"Clock",
//     Desc:"Perfect",
//     decor:{
//        home: "life"
//     }

// }
// console.log(product.decor);


// //indexnotation
// console.log(product['Name']);




var ProductName=document.getElementById("ProductName");
var Productprice=document.getElementById("ProductPrice");
var ProductCat=document.getElementById("ProductCat");
var ProductDes=document.getElementById("ProductDes");
var productList=[];
var update;
var mainbtn=document.getElementById("mainbtn")

if (localStorage.getItem("product")!=null) {

    productList=JSON.parse(localStorage.getItem("product"))
    displayProduct();
    
}else{
    productList=[]
}
function addProduct() {
    var product={
        name:ProductName.value,
        price:Productprice.value,
        cat:ProductCat.value,
        des:ProductDes.value,
    }
    if (mainbtn.innerText="update") {
      productList[update]=product;
      mainbtn.innerText="Add Product"
    }
else{

}
    productList.push(product);
    clearform()
    localStorage.setItem("product",JSON.stringify(productList))
    displayProduct();
    console.log(productList);
}

function displayProduct() {
 var   cartona=``;
 for (let i = 0; i < productList.length; i++) {

    cartona+=`<tr>
    <td>${i+1}</td>
    <td>${productList[i].name}</td>
    <td>${productList[i].price}</td>
    <td>${productList[i].cat}</td>
    <td>${productList[i].des}</td>
    <td><button type="submit" class="btn btn-outline-success" onClick="updateProduct(${i})">Update</button></td>
    <td><button type="submit" class="btn btn-outline-danger" onclick="deleteproduct(${i})">Delete</button></td>
  </tr>`
 }
 document.getElementById("tbody").innerHTML=cartona;

}

function clearform() {
    ProductName.value='';
    Productprice.value='';
    ProductCat.value='';
    ProductDes.value='';
    
}

function deleteproduct(index) {
    productList.splice(index, 1)
    displayProduct();
    localStorage.setItem("product",JSON.stringify(productList))

    
}

function updateProduct(index) {
    ProductName.value=productList[index].name;
    Productprice.value=productList[index].price;
    ProductCat.value=productList[index].cat;
    ProductDes.value=productList[index].des;
    mainbtn.innerText="update";
    update=index;

}

function search(searchkey) {
    var cartona='';
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(searchkey.toLowerCase())) {
           productList[i].newName=productList[i].name.replace(searchkey,`<span class=" text-danger fw-bolder">${searchkey}</span>`)
            cartona+=`<tr>
            <td>${i+1}</td>
            <td>${productList[i].newName?productList[i].newName:productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].cat}</td>
            <td>${productList[i].des}</td>
            <td><button type="submit" class="btn btn-outline-danger" onClick="updateProduct(${i})">Update</button></td>
            <td><button type="submit" class="btn btn-outline-warning" onclick="deleteproduct(${i})">Delete</button></td>
          </tr>`
         }
         document.getElementById("tbody").innerHTML=cartona;
        
        }
    }






