module.exports = ({
    title, date, author, description, incident_type, incident_severity, owner_name, owner_tel, owner_add, owner_email, question_1, question_2, question_3, question_4, question_5, 
    question_6, question_7, question_8, question_9, question_10, question_11, action 
    }) => {
    return `
    <!doctype html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title> report </title>
    </head>
    <body>
        <h1>${title}</h1>

    </body>
    </html>
    
    `
}

// `
// <!doctype html>
// <html>
// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     <title> report </title> 
// </head>
// <body>
//     <div class="container">
//         <div class="formContainer" style="padding: 10px;">
//             <h3>Checklist Summary</h3>
//             <hr>
//             <h5 style="text-decoration: underline;">General</h5>
//             <form>
//                 <div style="margin-top: 10px; margin-left: 15px;">
//                     <div class="row">
//                         <div class="col-6">
//                             <div class="form-group">
//                             <label class="form-label font-weight-bold"> Date: </label>
//                             <input class="form-control" title="Date:" readonly="" value="2019-05-29">
//                         </div>    
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold"> Incident Title: </label>
//                             <input class="form-control" title="Incident Title:" readonly="" value="PATRIKSSSC">
//                         </div>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold"> Description: </label>
//                             <input class="form-control" title="Description:" readonly="" value="test2">
//                         </div>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold"> Type: </label>
//                             <input class="form-control" title="Type:" readonly="" value="Data Breach">
//                         </div>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold"> Severity: </label>
//                             <input class="form-control" title="Severity:" readonly="" value="low">
//                         </div>
//                     </div>
//                 <div class="col-6">
//                     <label class="font-weight-bold">Client:</label>
//                     <div class="form-group">
//                         <label class="form-label font-weight-bold"> Name: </label>
//                         <input class="form-control" title="Name:" readonly="" value="f">
//                     </div>
//                     <div class="form-group">
//                         <label class="form-label font-weight-bold"> Email: </label>
//                         <input class="form-control" title="Email:" readonly="" value="f">
//                     </div>
//                     <div class="form-group">
//                         <label class="form-label font-weight-bold"> Telephone #: </label>
//                         <input class="form-control" title="Telephone #:" readonly="" value="f">
//                     </div>
//                     <div class="form-group">
//                         <label class="form-label font-weight-bold"> Address: </label>
//                         <input class="form-control" title="Address:" readonly="" value="test2">
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <h5 style="text-decoration: underline;">Questionnaire</h5>
//         <div style="margin-top: 10px; margin-left: 15px;">
//             <div class="row">
//                 <div class="col-12">
//                     <div class="form-group">
//                         <label class="form-label font-weight-bold"> Address: </label>
//                         <input class="form-control" title="Address:" readonly="" value="test2">
//                     </div>
//                         <label class="font-weight-bold">1. Which IT systems, equipment or devices are involved in the security breach?</label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold"></label>
//                             <input class="form-control" readonly="" value="f">
//                         </div>
//                         <label class="font-weight-bold">2. What information has been lost or compromised?</label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold"></label>
//                             <input class="form-control" readonly="" value="f">
//                         </div>
//                         <label class="font-weight-bold">3. How much information has been lost?</label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold"></label>
//                             <input class="form-control" readonly="" value="f">
//                         </div>
//                         <label class="font-weight-bold">4. Is the information client based?</label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold">  </label>
//                             <input class="form-control" readonly="" value="f">
//                         </div>
//                         <label class="font-weight-bold">5. If the incident involves the loss of a laptop or portable device, did the device contain client Data. Was the information, backed up onto Druva systems?</label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold">  </label>
//                             <input class="form-control" readonly="" value="f">
//                         </div>
//                         <label class="font-weight-bold">6. Does it include records of operational, legal or evidential value to the company or its clients?</label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold">  </label>
//                             <input class="form-control" readonly="" value="f">
//                         </div>
//                         <label class="font-weight-bold">7. Is it business-critical? Do users rely on access to this information asset or can they use reliable electronic copies or alternative manual processes e.g. paper files if the information asset is unavailable?</label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold">  </label>
//                             <input class="form-control" readonly="" value="fno">
//                         </div>
//                         <label class="font-weight-bold">8. How urgently would access need to be restored to an information asset to resume business or, to return to the required standard of service?</label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold">  </label>
//                             <input class="form-control" readonly="" value="f">
//                         </div>
//                         <label class="font-weight-bold">9. Will the loss or compromise of the information have adverse operational, financial legal, liability or reputational consequences for company or its clients?</label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold">  </label>
//                             <input class="form-control" readonly="" value="f">
//                         </div>
//                         <label class="font-weight-bold">10. Is the information bound by any contractual security arrangements e.g. to clients?</label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold">  </label>
//                             <input class="form-control" readonly="" value="f">
//                         </div>
//                         <label class="font-weight-bold">11. Is any of the information confidential?</label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold">  </label>
//                             <input class="form-control" readonly="" value="f"></div>
//                         <label class="font-weight-bold">12. High Risk Action </label>
//                         <div class="form-group">
//                             <label class="form-label font-weight-bold">  </label>
//                             <textarea class="form-control" maxlength="300" spellcheck="true" readonly="">Test2</textarea>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     </div>
// </div>
// </body>
// </html>`
