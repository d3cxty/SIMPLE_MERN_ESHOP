import express from 'express';
import product from '../models/Product.models.js'

const app = express();
app.use(express.json());



//add product
app.addproduct = async (req, res) => {  // Use POST for adding products
    try {
      const newproduct = new product(req.body);
      const savedproduct = await newproduct.save();
      res.status(201).json(savedproduct); // Send a 201 Created response with the saved product data
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating product' }); // Handle errors
    }
  };

  
//fetch products
app.findproduct = async(req,res)=>{
    
    const product = await product.find();
    res.json(product);
    if(!product){
        res.json({"message": "no products were found"});
    }
};

//fetch product by id
app.findproductById = async(req,res)=>{
    const{id} = req.params;
    const product = await product.findById(id);
    res.json(product);
};

//delete product

app.deleteProduct = async(req,res)=>{
    try {
        const { id } = req.params;
        const deletedproduct = await product.findByIdAndDelete(id);

        if(!deletedproduct){
            return res.status(404).json({"message":"product not found"})
        }
        res.json({"message":"product deleted successfully"})
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting product' });
    }
};

export default app;