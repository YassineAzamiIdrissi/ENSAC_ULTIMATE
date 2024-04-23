const {Schema,model, model} = require("mongoose");
const certificationSchema = new Schema({
    studentId:{
        type:String, // linked to Student
        required:true 
    }, 
    trainingId:{
        type:String,
        required:true
    }, 
    decision:{
        type:Boolean, 
        default:false
    }
}, { timestamps: true }); 

const model = model("Certification",certificationSchema);
module.exports = model; 