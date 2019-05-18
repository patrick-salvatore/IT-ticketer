const express = require('express'),
router = express.Router(), 
Report = require('../models/reportModel');

router.get('/', (req, res) => {
    res.status(200).json()
})

router.post('/', (req, res) => {
    
})

module.exports = router