import express from 'express';
import product from '../models/Product.model.js'

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
    
    const Product = await product.find();
    res.json(Product);
    if(!Product){
        res.json({"message": "no products were found"});
    }
};

//fetch product by id
app.findproductById = async(req,res)=>{
    const{id} = req.params;
    const Product = await product.findById(id);
    res.json(Product);
};

//delete product

app.deleteproduct = async(req,res)=>{
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