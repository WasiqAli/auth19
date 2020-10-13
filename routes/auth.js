const router = require('express').Router();
const User = require('../model/User');
const BrandEmployee = require('../model/BrandEmployee');
// const Branduser = require('../model/Branduser');

const { Router } = require('express');
const AuthController = require("../controllers/AuthController");
const BrandEmployeeController=require("../controllers/BrandEmployeeController");
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



// create brandemployee
router.post('/:id/brandemployee',BrandEmployeeController.registerEmployee);

//delete brandemployee
router.delete('/:id/employeeDelete',BrandEmployeeController.employeeDelete);

<<<<<<< HEAD
router.get('/:id/employeeGet',BrandEmployeeController.employeeGet);

=======
//get brandemployee
router.get('/:id/employeeGet',BrandEmployeeController.employeeGet);
//edit brandemployee
>>>>>>> 9edcc90830f115b62d9bd3cef851ce6efda87610
router.put('/:id/employeeEdit',BrandEmployeeController.employeeEdit)










module.exports = router;