const express = require('express');
const User = require('../database/models/user.model');
const router = express.Router();

// Sign up route, used for creating new accounts
router.post("/signup", async (req, res) => {
    try{
        const user = new User({ ...req.body })
        const token = await user.generateAuthToken();
        res.status(201).send({
            success: true,
            message: "Successfully created an account",
            user: user.getPublicProfile(),
            token
        })
    }catch(error){
        console.log(error);
        res.status(400).send({
            success: false,
            message: error.message
        })
    }
})

// Login route used to login existing users
router.post("/login", async (req, res) => {
    try{
        const user = await User.findByCredentials({ ...req.body })
        console.log(user);
        const token = await user.generateAuthToken();
        res.status(200).send({
            success: true,
            message: "Successfully logged in.",
            user: user.getPublicProfile(),
            token
        })
    }catch(error){
        console.log(error);
        res.status(401).send({
            success: false,
            message: error.message
        })
    }
})

module.exports = router