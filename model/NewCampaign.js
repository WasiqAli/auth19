const mongoose = require('mongoose');
const User = require('../model/User');
var Schema = mongoose.Schema;

const newCampaignSchema = new Schema(
   { 
    Companyid:{  type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
            },

//Step-1
    overview:{
        projectName:{
            type:String,
            min:6,
            max:20},
        description:{
            type:String,
            min:20,
            max:200
        }
    },
//Step-2
    prodDetails:{
        category:{type:String},
        brand:{type:String},
        productDetails:{type:String},
        region:{type:String},
        image:{type:String},
        productName:{type:String},
        productURL:{type:String},
        productDescription:{type:String}
    },
//Step-3
    projectDetails:{
        //1
        medium:{type:String},
        //2
        frequency:{type:String},
        //3
        recurring: {
            type: Boolean,
           },  
          
        //4
        budget: {
            currency: { type: String },
            range: {
                min: { 
                    type: Number
                    // , min: 0,
                    // validate: {
                    //     validator: function(val){
                    //         const currMax = this.target.budget.range.max;
                    //         return (currMax !== undefined ? val <= currMax : true);
                    //     },
                    //     message: "The MIN range with value {VALUE} must be <= than the max range!"
                 
                },
                max: { 
                    type: Number
                    // , min: 0,
                    // validate: {
                    //     validator: function(val) {
                    //         const currMin = this.target.budget.range.min;
                    //         return (currMin !== undefined ? val >= currMin : true);
                    //     },
                    //     message: "The MAX range with value {VALUE} must be >= than the min range!"
                    }
                }
            
          },
       
         //5
         startDate : {
            type: Date,
            // required: true
          },
          endDate: {
            type: Date,
            // required: true,
            // validate: [dateValidator, 'Start Date must be less than End Date']
          },
          //6--Segmentation
          //Audience
          primaryAudience:{type:String},
          secondaryAudience:{type:String},
          
          //7
          age: {
            
            range: {
                min: { 
                    type: Number, min: 0,
                    // validate: {
                    //     validator: function(val){
                    //         const currMax = this.target.age.range.max;
                    //         return (currMax !== undefined ? val <= currMax : true);
                    //     },
                    //     message: "The MIN range with value {VALUE} must be <= than the max range!"
                    // }
                },
                max: { 
                    type: Number, min: 0,
                    // // validate: {
                    // //     validator: function(val) {
                    // //         const currMin = this.target.age.range.min;
                    // //         return (currMin !== undefined ? val >= currMin : true);
                    // //     },
                    // //     message: "The MAX range with value {VALUE} must be >= than the min range!"
                    // }
                }
            }
          },
          
          //8
          gender:{
            type:String,
            enum:['No preference','Male','Female'],
            default:'No preference'
          },
        //9
          tagline:{
            type:String,
            min:4,
            max:100

        },
          
        //10
        objective:{type:String}
       

        // status:{
        //     type:Boolean,
        //     enum:[true,false]}

    }
   });

   // function that validate the startDate and endDate
function dateValidator(value) {
    // `this` is the mongoose document
    return this.startDate <= value;
  }

module.exports=mongoose.model('NewCampaign',newCampaignSchema);