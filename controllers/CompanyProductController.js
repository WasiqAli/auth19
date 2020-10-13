const CompanyProduct = require("../model/Companyproducts")

exports.addproduct = async(req,res)=>{
    const addproducts = new CompanyProduct({
        Companyid: {_id:req.params.id},
        prodCategory:{ 
                category:req.body.prodCategory.category, 
                subCategory:req.body.prodCategory.subCategory 
                                    
            },
            brand:req.body.brand,
            region:req.body.region,
            productName:req.body.productName,
            productURL:req.body.productURL,
            productDescription:req.body.productDescription 

    });
        try {
            const savedcompanyproduct = await addproducts.save();
            // console.log(savedUser);
    
            res.send(savedcompanyproduct);
            
        } catch (error) {
            res.status(400).send(error);
        }

    }