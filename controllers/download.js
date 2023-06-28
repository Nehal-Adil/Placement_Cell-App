//models
const Interview=require('../models/interview');
const Student=require('../models/student');
//file system
const fs = require('fs');
//csv writer
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


// Read the JSON file

         

//download controller
module.exports.download=function(req,res){
    Interview.find({},function(err,result){
        if(err){
            throw(err);
        }
        console.log(result);
        const jsonString = JSON.stringify(result);
   
       //write json file
        fs.writeFile('data.json', jsonString, (err) => {
            if (err) throw err;
            console.log('Data written to file');
          });
        });







     res.render('download');       
}


module.exports.csv=function(req,res){

    const jsonData = JSON.parse(fs.readFileSync('Data.json', 'utf-8'));
    
// defineing the csv writer
const csvWriter = createCsvWriter({
    path: 'data.csv',
    header: [
      { id: 'email', title: 'companyid' },
      { id: 'companyname', title: 'companyname' },
      { id: 'time', title: 'time' },
      { id: 'result', title: 'result' },
      { id: 'student_id', title: 'student id' },
    ]
  });


//   // Write the data to the CSV file
csvWriter.writeRecords(jsonData)
.then(() => {
  console.log('CSV file has been created');
  // Send the file to the client for download
  res.download('data.csv');
});




}

