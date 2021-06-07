const express = require('express');
const schedule = require('node-schedule');
const squadData = require('../data/squads.json');
const getSquads = require('../utilities/players');
const { auth } = require('../middleware/auth');
let squads = [];
const router = express.Router();

schedule.scheduleJob('fetching-squads', '0 0 * * *', () => {
    try{
        getSquads().then((response) => {
            squads = response;
        })
    }catch(error){
        squads = getSquads;
    }
})

router.get("/players", auth, (req, res) => {

    if(squads.length == 0){
        squads = squadData;
    }
    
    res.send({
        squads
    })
})

module.exports = router;