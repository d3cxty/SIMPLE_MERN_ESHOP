import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
   
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true,
        min: 0
    },
   
},
{
    timestamps: true
}
);

const Product = mongoose.model('Product',productSchema);
export default Product;