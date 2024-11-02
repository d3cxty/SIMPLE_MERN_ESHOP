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
        type: string,
        required: true,
        min: 0
    },
   
},
{
    timestamps: true
}
);

const product = mongoose.model('product',productSchema);
export default product;