import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
     
    }
    res.status(201).json({ success:'success' });
  } else {
    res.status(404).json({ error: "Not Found" });
  }

};

export default connectDb(handler);
