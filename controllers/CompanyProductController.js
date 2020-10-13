const CompanyProduct = require("../model/Companyproducts")
 
exports.addproduct = async(req,res)=>{
    const companyproduct = new CompanyProduct({
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
            const savedcompanyproduct = await companyproduct.save();
            // console.log(savedUser);
    
            res.send(savedcompanyproduct);
            
        } catch (error) {
            res.status(400).send(error);
        }
 
    }
    exports.productdelete =  async(req,res)=>{
 
        CompanyProduct.findOne({_id: req.params.id}, function (error, companyproduct){
            console.log("This product will get deleted " + companyproduct);
            
            companyproduct.remove();
            res.send("This product is removed "+ companyproduct);
        
        });
    }
 
    exports.productget=async(req,res)=>{
        CompanyProduct.findOne({_id: req.params.id},function(error,companyproduct){
            console.log("This product will get selected "+ companyproduct);
 
            res.send("This product is selected"+ companyproduct);
        });
    }
 
    //get all product//
 
    exports.allproductGet=async(req , res)=> {
        CompanyProduct.find({}).then(function (companyproduct) {
        res.send(companyproduct);
        });
       }

    //get all product for specific Company//
 
    exports.allproductCompanyGet=async(req , res)=> {
        CompanyProduct.find({Companyid : req.params.id}).then(function (companyproduct) {
        res.send(companyproduct);
        });
       }
 
    //Update Product
 
    exports.updateproduct =  function (req,res){
        var conditions ={_id: req.params.id};
        CompanyProduct.updateOne(conditions, req.body)   
            .then(doc =>{
                if(!doc){
                    return res.status(404).end();}
                    return res.status(200).json(doc);
                })
                .catch(err => next(err));
            
     
    }