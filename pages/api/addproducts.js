import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  await connectDb()
  if (req.method == 'POST') {
      // console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
      let p = new Product({
        title: req.body[i].title,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
        img: req.body[i].img,
        catagory: req.body[i].catagory,
        size: req.body[i].size,
        color: req.body[i].color,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
      });
      await p.save();
    }
    res.status(201).json({ success:'success' });
  } else {
    res.status(404).json({ error: "Not Allowed" });
  }

};

export default connectDb(handler);
