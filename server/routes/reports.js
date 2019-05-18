const express = require('express'),
    router = express.Router(),
    Report = require('../models/reportModel');

router.get('/', (req, res) => {
    Report.findAll()
        .then(reports => {
            res.status(200).json(reports)
        })
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const data = req.body
    Report.create({
        title: data.title,
        author: data.author,
        description: data.description,
        incident_type: data.incident_type,
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
    .then(_ => {
         res.status(201).json('created new report')
    })
    .catch(err => console.log(err))
});



module.exports = router