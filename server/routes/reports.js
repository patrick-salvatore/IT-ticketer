const express = require('express'),
    router = express.Router(),
    pdf = require('html-pdf'),
    path = require('path'),
    Report = require('../models/reportModel'), 
    pdfTemplate = require('../documents/index');

// ROUTE THAT FETCHES ALL REPORTS
router.get('/', (req, res) => {
    Report.findAll()
        .then(reports => {
            if (!reports.length) {
                res.status(404).send({message: 'No reports available'})
            }
            else {
                res.json({reports})
            }
        })
        .catch(err => {
            console.log(err)
        })
})

// ROUTE THAT CREATS A NEW REPORT
router.post('/', (req, res) => {
    const data = req.body.Report
    {Report.create({
        date: data.date,
        title: data.title.toLowerCase(),
        author: data.author,
        description: data.incident_desc,
        incident_type: data.incident_type.toString(),
        incident_severity: data.incident_severity,
        owner_name: data.owner_name,
        owner_tel: data.owner_tel,
        owner_add: data.owner_add,
        owner_email: data.owner_email,
        question_1: data.question_1,
        question_2: data.question_2,
        question_3: data.question_3,
        question_4: data.question_4,
        question_5: data.question_5,
        question_6: data.question_6,
        question_7: data.question_7,
        question_8: data.question_8,
        question_9: data.question_9,
        question_10: data.question_10,
        question_11: data.question_11,
        action: data.action
        })
        .then(report => {
            res.status(201).json({"message": "new report created", "report": report})
        })
        .catch(err => {
            res.status(400).json({"message": "Error while creating post"})
        })}
});

// ROUTE THAT FETCHES REPORT BY ID
router.get('/:ID', (req,res) => {
    const ID = parseInt(req.params.ID)
    Report.findByPk(ID)
    .then(report => { 
        res.status(200).json({report})
    })
    .catch(err => res.status(404).json({"message": "report does not exist"}))
})

// ROUTE THAT WILL UDATE / EDIT  DATA BASED ON ID
router.post('/report/:ID', (req, res) => {
    const ID = parseInt(req.params.ID)
    const updatedData = req.body
    Report.findByPk(ID)
        .then((prevData) => {
            if (prevData) {
                Report.updateAll(prevData, updatedData)
            }
            else{
                res.sendStatus(404)
            }
        })
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

// ROUTE THAT FETCHES ROUTE FROM USER SEARCH
router.get('/:paramater/:value', (req, res) => {
    const searchParam = req.params.paramater
    const searchValue = req.params.value 

    Report.searchQuery(searchParam, searchValue)
    .then(reports => {
        if (!reports.length) {
            return res.status(404).send({message: 'No reports found'})
        } else {
            return res.json({reports}).status(200)
        }
    })
    .catch(err => console.log(err))
})

// ROUTE THAT WILL GENERATE PDF FILE FROM REPORT BY ID
router.post('/report/pdf/create', (req, res) => {
    pdf.create(pdfTemplate(req.body), {format: 'letter'}).toFile('./report.pdf', (err) => {
       if (err) {
           res.send(Promise.reject())
       } else {
           res.send(Promise.resolve())
       }
    })
}) 

router.get('/report/pdf/fetch', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'report.pdf'))
})

module.exports = router