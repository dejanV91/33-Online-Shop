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
                            <button class="btn btn-primary">Add To Cart</button>
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
            
            
        }
    }

    xhttp.open("GET","https://6334a608ea0de5318a06d722.mockapi.io/products/" + id, true);
    xhttp.send();

}