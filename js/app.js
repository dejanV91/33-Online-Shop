let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);

        let obj = JSON.parse(this.responseText)
        console.log(obj);

    }
}

xhttp.open("GET","https://6334a608ea0de5318a06d722.mockapi.io/products", true);
xhttp.send();