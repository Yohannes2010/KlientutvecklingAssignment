window.addEventListener("load",load);
 // document.getElementById("loadUser").addEventListener('click',load);
 
 
 function load() {
 fetch("https://fakestoreapi.com/products?limit=5")
 .then(resp=>resp.json())
 .then(data=>render(data))
 .catch(err=>console.error(err.message));
 
 }
 
 function render(products) {
 console.log(products);
 let output = "";
 products.forEach(
   (product) =>
     (output += `
     <div class="card">
       <h4 id="title">${product.title}</h4>
       <p id="des">${product.description}</p>
       <p>
       <img id="image" src="${product.image}"  width="50" height="50"> <br><br>
         ${"$"+product.price} <br>
       </p>
       
        <p><button class="add-cart" data-productId=${product.id} onClick= addToCart(${product.id})>addToCart</button></p>
      </div>`)
      );
 document.getElementById("output").innerHTML = output;
 }
 function addToCart( id){     
    fetch("https://fakestoreapi.com/products/"+ id)
    .then(resp=>resp.json())
    .then(data=> putOnStorage(data))
    .catch(err=>console.error(err.message));
    
 }
 function putOnStorage(data)
 {
 localStorage.setItem("itemss", JSON.stringify(data));
 document.getElementById("numberofItemInCart").textContent= localStorage.length;

 }
 function  writeCart(x){
   let product = JSON.parse(x)
   let output ="";
  (output += `
  <div class="card">
       <h4 id="title">${product.title}</h4>
       <p id="des">${product.description}</p>
       <p>
       <img id="image" src="${product.image}"  style="width:100%"> <br><br>
         ${"$"+product.price} <br>
       </p>
       
        <p><button class="add-cart" data-productId=${product.id} onClick= goToOrder(${product.id})>Order</button></p>
     </div>`);
  console.log(output)
  document.getElementById("cartitem").innerHTML= output
 }
 function goToOrder() {}
 
 function showTheCartitems(){
    //let cartItems=
    localStorage.getItem("itemss");
 //cartItems=JSON.parse(cartItems);

    const items = {...localStorage}
    
   //document.getElementById("cartitem").innerHTML= localStorage.getItem(1);
   console.log(items);
   let output = "";
  Object.values(localStorage).map(
   (product) =>
  { console.log(product)
   
  writeCart(product);
  
  
  })
   
  }
  function validate() {
    var fname = document.forms['orderForm']['firstName']
    var lname = document.forms['orderForm']['lastName']
    var telNo = document.forms['orderForm']['telNumber']
    var eMail = document.forms['orderForm']['email']
    var adrs = document.forms['orderForm']['adress']

    if (fname.value == '') {
        document.getElementById('text').innerHTML = '<div class="error"> <p> Please enter your first name.</p></div>';
        return false;
    }
    else if (lname.value == '') {
        document.getElementById('text').innerHTML = '<div class="error"> <p> Please enter your last name.</p></div>';
        return false;
    }
    else if (telNo.value == '') {
        document.getElementById('text').innerHTML = '<div class="error"> <p> Please enter your telephone number.</p></div>';
        return false;
    }
    else if (eMail.value == '') {
        document.getElementById('text').innerHTML = '<div class="error"> <p> Please enter your e-mail.</p></div>';
        return false;
    }
    else if (adrs.value == '') {
        document.getElementById('text').innerHTML = '<div class="error"> <p> Please enter your delivery adress.</p></div>';
        return false;
    }
    else {
        
        return true;
    }
}



 
