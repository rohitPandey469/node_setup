const dbConn = require("./config/dbConn");
const Employee=require('./models/Employee')
// const User=require('./models/User')

dbConn();


const seedEmployees = [
    {
        firstname:"Rohit",
        lastname:"Pandey"
    },
    {
        firstname:"Sanya",
        lastname:"Saxena"
    },
    {
        firstname:"Sneha",
        lastname:"Gupta"
    },
    {
        firstname:"Shivi",
        lastname:"Sirvastava"
    },
  ];
  
  Employee.insertMany(seedEmployees)
    .then(() => {
      console.log("Fine");
    })
    .catch((e) => {
      console.log(e);
    });
  
