var express=require('express');
var app=express();
app.use(express.static('public'))
app.get("/",(req, res)=>{res.send("Welcome to  IET");});
app.get("/product",(req, res)=>{var p={ "id":20, "title":"G+2 Bunglow","description":"Residential Structure", "unitprice":1475, "quatity":2 };
                                       res.send(p);
});
app.listen(9000);
console.log("App is listening on port 9000");