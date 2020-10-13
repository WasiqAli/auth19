const router = require('express').Router();
const User = require('../model/User');
const BrandEmployee = require('../model/BrandEmployee');
const CompanyProduct = require("../model/Companyproducts")


const { Router } = require('express');
const AuthController = require("../controllers/AuthController");
const BrandEmployeeController=require("../controllers/BrandEmployeeController");
const CompanyProductsController=require("../controllers/CompanyProductController")
//const registerValidation = require('../validation');

    
//register new user
router.post('/register',AuthController.register);

//login
router.post('/login',AuthController.login);

//delete user from db
router.delete('/delete/:id',AuthController.delete);


//update user info//

router.put('/edit/:id',AuthController.edit);

//get one userinfo//
router.get('/userGet/:id',AuthController.userGet);
//get all users data//
router.get('/userlist',AuthController.allusersGet);


//Brand Employee Routes

// create brandemployee
router.post('/:id/brandemployee',BrandEmployeeController.registerEmployee);

//delete brandemployee
router.delete('/:id/employeeDelete',BrandEmployeeController.employeeDelete);

//get single brandemployee
router.get('/:id/employeeGet',BrandEmployeeController.employeeGet);
//edit brandemployee
router.put('/:id/employeeEdit',BrandEmployeeController.employeeEdit)
//get all brandemployee//
router.get('/employeelist',BrandEmployeeController.allemployeeGet);

//add company products//
router.post('/:id/addproducts',CompanyProductsController.addproduct);







module.exports = router;