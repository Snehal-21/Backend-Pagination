import Products from "../modals/Products.js";

export const addProduct = async (req, res) => {
    try {
        const { name, price, category, color, brand, size } = req.body;
        if (!name) return res.send("Name is required");
        if (!price) return res.send("Price is required");
        if (!category) return res.send("category is required");
        if (!color) return res.send("color is required");
        if (!brand) return res.send("brand is required");
        if (!size) return res.send("size is required");

        const product = new Products({
            name,
            price,
            category,
            color,
            brand,
            size
        });
        await product.save();
        return res.send("Product added successfully");
    } catch (error) {
        return res.send(error);
    }
}

export const pagination = async (req, res) => {
    try {
        // const {limitValue=5,skipvalue=15}=req.body;
        //     // const limitValue=5;
        //     // const skipvalue=0;
        //     const data=await Products.find({}).limit(limitValue).skip(skipvalue);
        //     res.send(data);


        const { page = 4, limit = 5 } = req.body;

        const data = await Products.find({})
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Products.countDocuments();
        res.send({
            data,
            tatalpages: Math.ceil(count / limit),
            currentpage: page
        });

    }
    catch (error) {
        return res.send(error);
    }

}


export const color_Filter=async(req,res)=>{
    try{
        const { color } =req.body;
        if(!color) return res.send("Color is required!");
        const products=await Products.find({color}).exec();
        console.log(products,"kjsbckjs")
        if(!products.length) {
             res.send("Products not found!");
        }else{
            res.send(products[0])
        }

    }catch(error){
        return res.send(error);
    }
}

export const price_Filter=async(req,res)=>{
    try{
        const { price } = req.body;
        if(!price) return res.send("Price is required!");
        // if(!max_price) return res.send("Price is required!");

       
        // const data=await Products.find({price}).exec();
        // console.log(data,"sfga");
        const productList=await Products.find({}).exec();
      const data=productList.filter(item => item.price <=price);
        return res.send(data);
      
        }
    catch(error){
        return res.send(error);
    }
}
