const {Schema,model} = require("mongoose"); 
const academySchema = new Schema({
    name:{
        type:String, 
        required:true
    },
    picture:{
        type:String, 
    },
    description:{
        type:String, 
        required:true 
    },
    domain:{
        type:String,  // linked to Domain
        required:true,
    },
    professors:{
        type:[String], // linked to Professors..
    }, 
    responsables:{
        type:[String], // linked to Professors..
        max:2
    }, 
    trainings:{
        type:[String],// linked to Training
    }, 
    subscribers:{
        type:[String], // linked to Student
    }
}, { timestamps: true }); 
 
const AcademyModel = model("Academy",academySchema); 
module.exports = AcademyModel; 