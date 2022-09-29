let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

        let obj = JSON.parse(this.responseText)
        let productsEl = document.getElementById("products");
        let html = "";

        for (let i = 0; i < obj.length ; i++) {
            html += "<div class='col-md-4'>" +
            "<div class='card'>"+
            "<img src="+obj[i].product_image+">"+
           " </div>"+
            "</div>"
            
        }

        productsEl.innerHTML = html;

    }
}

xhttp.open("GET","https://6334a608ea0de5318a06d722.mockapi.io/products", true);
xhttp.send();