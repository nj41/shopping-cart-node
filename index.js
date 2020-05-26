
const path = require('path');
const express = require('express');
const app = express();
var request=require('request');

const port = process.env.PORT || 5000;
const data = require('./data');
const cartData = require('./cart');

app.use(express.static(path.join(__dirname, 'myfrontend/build')));


app.get('/newurl', (req, res) => 
{  
res.send('this is the new URL.....')

});

app.get('/getweather', (req, res) => 
{  
    request(`http://api.weatherstack.com/current?access_key=cd49a7f5964260cc297113af6e6d2877&query=New York`,
    function(error,response,body)
    {  
        if(!error && response.statusCode==200)
        { 
            var p=JSON.parse(body);
            var q=p["current"]["temperature"];
             res.send({ q});
        }
    })
});

app.get('/api/allproducts', (req, res) => 
{  
   res.send(data.products); 
});

app.get('/allCart', (req, res) => 
{  
   res.send(cartData.products); 
});


app.get('/demoCart', (req, res) => 
{ 

    res.send(cartData.products); 
});


app.post('/demoCart/:pid', (req, res) => 
{  
    
    const productToAdd=data.products.find(x=>x.id===req.params.pid);
    const checkInCart=cartData.products.find(x=>x.id===productToAdd.id);
    
    
    if(checkInCart)
    {
         cartData.products.map(x=>{
            if(x.id === req.params.pid){
                x.itemAmount+=1;
                res.send(cartData.products);
                return;

                }
        })
    }

    else
    {
       
        cartData.products.push(productToAdd);
        res.send(cartData.products);
        
    }

});

app.post('/deleteItem/:pid', (req, res) => 
{  
    
    const productToAdd=data.products.find(x=>x.id===req.params.pid);
    const checkInCart=cartData.products.find(x=>x.id===productToAdd.id);
    

    if(checkInCart)
    {
           data.products.map(x=>{
            if(x.id ===req.params.pid)
            {
                x.itemAmount-=1;

                //delete the item
                if(x.itemAmount===0)
                {
                    const inCart=cartData.products.find(y=>y.id===x.id); 
                    const index = cartData.products.indexOf(inCart);
   
                    inCart.itemAmount=1;
                    cartData.products.splice(index, 1);
                    
                }

                //end updated----
                res.send(cartData.products);
                return;   
            }
        })
    }
    else{    
        res.send(cartData.products);
    }
});

app.post('/deleteItemAll/:pid', (req, res) => 
{  
    
    const productToAdd=data.products.find(x=>x.id===req.params.pid);
    const checkInCart=cartData.products.find(x=>x.id===productToAdd.id); 
    const index = cartData.products.indexOf(checkInCart);
   
    checkInCart.itemAmount=1;
    
    if (index > -1) {
        cartData.products.splice(index, 1);
    }
    
    res.send(cartData.products);

});


app.get('/addtocart', (req, res) => 
{ 
    res.send(data.products); 
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

