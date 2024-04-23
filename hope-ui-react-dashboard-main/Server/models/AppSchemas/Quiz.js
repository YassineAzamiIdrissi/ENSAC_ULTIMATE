const { Schema, model } = require("");
const quizSchema = new Schema(
  {
    courseId: {
      type: String,
      required: true,
    },
    studentId:{
        type:String, 
        required:true
    },
    mark:{
        type:Number, 
        default:0,  
        max: 20
    },
    questions: {
      type: [String], // linked to questions
      required: true,
    },
    images: {
      type: [String],
      default:[]
    },
  },
  { timestamps: true }
);
model = model("Quiz", quizSchema);
module.exports = model;
