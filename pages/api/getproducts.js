import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res)=>{
    let products = await Product.find()
    console.log(products);
    res.status(200).json({products})
}

export default connectDb(handler)