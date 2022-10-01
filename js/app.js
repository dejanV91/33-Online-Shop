document.getElementById("myCart").innerHTML = getCookie("cart_items");

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

        let obj = JSON.parse(this.responseText);
        let productsEl = document.getElementById("products");
        
        const datas = obj.map(function(item){
            const {product_description : desc, 
                    product_image : img, 
                    product_name : name, 
                    product_price : price,
                    id} = item;
           
            return `<div class="card" style="width: 18rem; margin:10px; padding:10px;">
                        <img class="card-img-top" src="${img}" alt="${name}">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">$${price}</p>
                            <button onclick= "addToCart(this)" data-product-id="${id}" class="btn btn-primary">
                                Add To Cart
                            </button>
                            <button onclick="seeMore(this)" data-product-id="${id}" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#seeMoreModal">
                                See More
                            </button>
                        </div>
                    </div>`
        })
        .join("");

        productsEl.innerHTML = datas;
    }
}

xhttp.open("GET","https://6334a608ea0de5318a06d722.mockapi.io/products", true);
xhttp.send();

function seeMore(el){
    let id = el.dataset.productId;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            let obj = JSON.parse(this.responseText);
            
            const {product_description : desc,
                product_materijal : mater,
                product_price : price} = obj;

            document.getElementById("productDetails").innerHTML = `<p>${desc}</p>
                                                                <p><b>Material: </b>${mater}</p>
                                                                <p><b>Price: </b>$${price}</p>`

        }
    }

    xhttp.open("GET","https://6334a608ea0de5318a06d722.mockapi.io/products/" + id, true);
    xhttp.send();
}

let total = 0;
let itemsAlreadyAdded = false;

function addToCart(el){
    let id = el.dataset.productId;

    if (!itemsAlreadyAdded) {
        document.getElementById("myCart"). innerHTML = "<div class='row'>" + 
                                                            "<div class='col-md-9'><h3>Your cart items:</h3></div>" +    
                                                            "<div class='col-md-3'><p><b>Total: </b>$<span id='totalPrice'>" + 0 + "</span></p></div>" +   
                                                        "</div>"
    itemsAlreadyAdded = true
    }
    
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState ==4 && this.status == 200) {

            let obj = JSON.parse(this.responseText)

            document.getElementById("myCart").innerHTML += "<div class='row cart-items' id='item" + obj.id + "'>" +
                                                                "<div class='col-md-4'>" + obj.product_name + "</div>" + 
                                                                "<div class='col-md-3'><b>Material: </b>" + obj.product_materijal + "</div>" +
                                                                "<div class='col-md-2'><b>Price: </b>$" + obj.product_price + "</div>" +
                                                                "<div class='col-md-3'><button onclick = 'removeFromCart(this)' data-product-price = " + obj.product_price + " data-product-id=" + obj.id + " class='btn btn-danger'>Remove from cart</button></div>" +
                                                            "</div>"          
        total = total + parseFloat(obj.product_price);
        document.getElementById("totalPrice").innerHTML = total;
        setCookie("cart_items", document.getElementById("myCart").innerHTML, 5);
        }
    }

    xhttp.open("GET", "https://6334a608ea0de5318a06d722.mockapi.io/products/" + id, true);
    xhttp.send()
}

function removeFromCart(el){
    let id = el.dataset.productId;
    let price = el.dataset.productPrice;
    document.getElementById("item" + id).remove();
    total = total - parseInt(price);
    document.getElementById("totalPrice").innerHTML = total;
    setCookie("cart_items", document.getElementById("myCart").innerHTML, 5);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}