const express = require('express'),
    router = express.Router(),
    Report = require('../models/reportModel');

// ROUTE THAT FETCHES ALL REPORTS
router.get('/', (req, res) => {
    Report.findAll()
        .then(reports => {
            if(!reports.length) {
                res.status(404).json({message: 'no messages found'})
            }
            res.status(200).json({reports})
        })
})

// ROUTE THAT CREATS A NEW REPORT
router.post('/', (req, res) => {
    const data = req.body.Report
    Report.create({
        title: data.title.toLowerCase(),
        author: data.author,
        description: data.incident_desc,
        incident_type: data.incident_type.toString(),
        incident_severity: data.incident_severity,
        owner_name: data.owner_name,
        owner_tel: data.owner_tel,
        owner_add: data.owner_add,
        question_1: data.q1,
        question_2: data.q2,
        question_3: data.q3,
        question_4: data.q4,
        question_5: data.q5,
        question_6: data.q6,
        question_7: data.q7,
        question_8: data.q8,
        question_9: data.q9,
        question_10: data.q10,
        question_11: data.q11,
        action: data.action
    })
    .then(report => {
        res.status(201).json({"message": "new report created", "report": report})
    })
    .catch(err => {
        res.status(400).json({"message": "Error while creating post"})
    })
});

// ROUTE THAT FETCHES ROUTE FROM USER SEARCH
router.get('/:paramater/:value', (req, res) => {
    const searchParam = req.params.paramater
    const searchValue = req.params.value 

    Report.searchQuery(searchParam, searchValue)
    .then(reports => {
        if (!reports.length) {
            res.status(404).json({message: 'No reports found'})
        }
        res.status(200).send(reports)
    })
    .catch(err => console.log(err))
})

// ROUTE THAT FETCHES REPORT BY ID
router.get('/:ID', (req,res) => {
    const ID = parseInt(req.params.ID)
    Report.findByPk(ID)
        .then(report => { 
            res.status(200).json({report})
        })
        .catch(err => res.status(404).json({"message": "report does not exist"}))
})

// ROUTE THAT DELETES A REPORT BY ID
router.delete('/:ID', (req, res) => {
    const ID = req.params.ID
    Report.destroy({
        where: {ID}
    })
    .then(_ => {
        res.status(200).json({"message": "Report successfully deleted"})
    })
    .catch(err => {
        res.status(404).json({"message": "Report not found"})
    })
})


module.exports = router