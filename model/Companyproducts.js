const mongoose = require('mongoose');
// const Branduser = require('../model/Branduser');
var Schema = mongoose.Schema;



const companyproductSchema = new Schema(
    {
        category:{
            type: String,
            required: true,
            min:6,
            max:255
},

        brand:{
            type: String,
            required:true,
            min:5,
            max:255
                },
        productDetails:{
              type: String,
              required:true,
              min:5,
              max:255
                },
        region:{
            type: String,
            required:true,
            min:5,
            max:255
            
    },
        productName:{
        type: String,
        required:true,
        min:4,
        max:255


                },

        productURL:{
            type: String,
            required:true,
            min:4,
            max:255   

            },
        productDescription:{
                type: String,
                required:true,
                min:4,
                max:255
    
            }
            
    });

module.exports= mongoose.model('Companyproducts',companyproductSchema);
   

   