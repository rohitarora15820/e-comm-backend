const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product=require("./db/Product");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let result = await User.findOne(req.body).select("-password");
    if (result) {
      res.send(result);
    } else {
      res.send({ result: "User not found" });
    }
  } else {
    res.send({ result: "User not found" });
  }
});

app.post('/add-product',async (req,res)=>{
  let product=new Product(req.body);
  let result=await product.save();
  res.send(result);
});


app.get('/products',async (req,res)=>{
  let result=await Product.find();
if(result.length>0){
  res.send(result);
}
else{
  res.send({"result":"No Product found"})
}
});

app.delete('/product/:id',async (req,res)=>{
let result=await Product.deleteOne({_id:req.params.id})
  res.send(result);
});

app.get('/product/:id',async (req,res)=>{
  let result=await Product.findOne({_id:req.params.id})
  if(result){
    res.send(result);
  }
  else{
    res.send({"result":"No such product found"});
  }

  });

  app.put('/product/:id',async (req,res)=>{
    let result=await Product.updateOne(
      {_id:req.params.id},
      {
        $set:req.body
      }
    )

      res.send(result);
  
    });


app.listen(5000);
