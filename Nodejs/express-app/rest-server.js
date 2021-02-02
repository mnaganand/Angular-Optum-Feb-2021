const { json } = require('express');
const express = require('express');

const app = express();

const products = [];
products.push({Id: 1, Name: "IPhone 12", Price: 90000});
products.push({Id: 2, Name: "Lenovo Thinkpad", Price: 160000});
products.push({Id: 3, Name: "Galaxy Watch", Price: 33000});

// /products ===> List of Products
app.get("/products", function(req, resp){

    resp.json(products);
});


// /products/1 ==> Product with id=1
app.get("/products/:id", function(req, resp){

    const productId = parseInt(req.params.id);
    if(productId){

        //const index = products.findIndex((item)=> {return item.Id === productId});
        const index = products.findIndex(item=> item.Id === productId);
        if(index !== -1){
            //Ok 
            return resp.json(products[index]);
        }
        else{

            //Not found
            return resp.status(404).end();
        }
    }
    else{
        //Bad request
        return resp.status(400).end();
    }
});





//start the express application
const PORT  = 9010;
app.listen(PORT, function() {
    console.log(`Application started at port: ${PORT} with Process ID: ${process.pid}`);
});