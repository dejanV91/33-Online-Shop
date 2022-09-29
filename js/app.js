let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

        let obj = JSON.parse(this.responseText);
        let productsEl = document.getElementById("products");
        
        const datas = obj.map(function(item){
            const {product_description : desc, 
                    product_image : img, 
                    product_name : name, 
                    product_price : price} = item;
           
            return `<div class="card" style="width: 18rem; margin:10px; padding:10px;">
                        <img class="card-img-top" src="${img}" alt="${name}">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">$${price}</p>
                            <button class="btn btn-primary">Add To Cart</button>
                            <button class="btn btn-info">See more</button>
                        </div>
                    </div>`
        })
        .join("");

        productsEl.innerHTML = datas;
    }
}

xhttp.open("GET","https://6334a608ea0de5318a06d722.mockapi.io/products", true);
xhttp.send();