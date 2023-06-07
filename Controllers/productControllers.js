import Products from "../modals/Products.js";

export const addProduct=async(req,res)=>{
    try{
        const { name,price }=req.body;
        if(!name) return res.send("Name is required");
        if(!price) return res.send("Price is required");
        const product= new Products({
            name,
            price
        });
        await product.save();
        return res.send("Product added successfully");
    }catch(error){
        return res.send(error);
    }
}

export const pagination=async(req,res)=>{
    try{
    // const {limitValue=5,skipvalue=15}=req.body;
    //     // const limitValue=5;
    //     // const skipvalue=0;
    //     const data=await Products.find({}).limit(limitValue).skip(skipvalue);
    //     res.send(data);


        const {page=4,limit=5}=req.body;
    
            const data=await Products.find({})
            .limit(limit*1)
            .skip((page-1)*limit)
            .exec();
            
            const count=await Products.countDocuments();
            res.send({
                data,
                tatalpages:Math.ceil(count/limit),
                currentpage:page
            });
            // res.send(data)
        
    }
    catch(error){
        return res.send(error);
    }

}
