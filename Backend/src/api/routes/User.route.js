const router = require("express").Router();
const UserCtrl = require("../controllers/User.Ctrl");

//save user data
router.post( "/register",UserCtrl.createUser);

//update user data
router.put( "/edit/:id",UserCtrl.updateUser);

//delete user data
router.delete( "/delete/:id",UserCtrl.deleteUser);

//Get all details
router.get( "/",UserCtrl.readAllUsers);

//Get a user
router.get( "/:id",UserCtrl.getUser);

//Login
router.post( "/login",UserCtrl.login);

module.exports = router;