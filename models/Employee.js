const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const employeeSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname is requires"],
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
