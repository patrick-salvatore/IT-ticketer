const express = require('express'),
    router = express.Router(),
    Report = require('../models/reportModel');


// ROUTE THAT FETCHES ALL REPORTS
router.get('/', (req, res) => {
    Report.findAll()
        .then(reports => {
            res.status(200).json({reports})
        })
        .catch(err => {
            res.json({"message": "Reports not found"})
        })
})

// ROUTE THAT CREATS A NEW REPORT
router.post('/', (req, res) => {
    const data = req.body.Report
    Report.create({
        title: data.title,
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
        return res.status(400).json({"message": "Error while creating post"})
    })
});

// ROUTE THAT FETCHES REPORT BY ID
router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    Report.findByPk(id)
        .then(report => {
            res.status(200).json({report})
        })
        .catch(err => res.status(404).json({"message": "report does not exist"}))
})

// ROUTE THAT DELETES A REPORT BY ID
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Report.destroy({
        where: {id}
    })
    .then(_ => {
        res.status(200).json({"message": "Report successfully deleted"})
    })
    .catch(err => {
        res.status(404).json({"message": "Report not found"})
    })
})


module.exports = router