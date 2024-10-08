const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();
const handleError = require("./middlewares/handleError");
const { Server } = require("socket.io");
const http = require("http");
//routes : ------------------------------------------------
const studentRoutes = require("./Routes/StudentRoute");
const professorRoutes = require("./Routes/ProfessorRoute");
const adminRoutes = require("./Routes/AdminRoute");
const academyRoutes = require("./Routes/AcademyRoute");
const trainingRoutes = require("./Routes/TrainingRoute");
const courseRoutes = require("./Routes/CourseRoute");
const chapterRoutes = require("./Routes/ChapterRoute");
const domainRoute = require("./Routes/DomainRoute");
const notificationsRoute = require("./Routes/NotificationRoute");
const enrollmentRoute = require("./Routes/EnrollmentRoute");
const progressionRoute = require("./Routes/ProgressionRoute");
const commentRoute = require("./Routes/CommentRoute");
const quizRoute = require("./Routes/QuizRoute");
const questionRoute = require("./Routes/QuestionRoute");
const markRoute = require("./Routes/MarkRoute");
const certifRoute = require("./Routes/CertificationRoute");
const postRoute = require("./Routes/PostRoute");
const generalRoute = require("./Routes/GeneralRoute");
const commentReplyRoute = require("./Routes/CommentReplyRoute");
const postCommentRoute = require("./Routes/PostCommentRoute");
const testimonialRoute = require("./Routes/TestimonialRoute");
// --------------------------------------------------------
const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// attribution des routes : -------------------------------
app.use("/api/students", studentRoutes);
app.use("/api/professors", professorRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/academies", academyRoutes);
app.use("/api/trainings", trainingRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/domains", domainRoute);
app.use("/api/notifications", notificationsRoute);
app.use("/api/enrollments", enrollmentRoute);
app.use("/api/progressions", progressionRoute);
app.use("/api/comments", commentRoute);
app.use("/api/quiz", quizRoute);
app.use("/api/questions", questionRoute);
app.use("/api/marks", markRoute);
app.use("/api/certifs", certifRoute);
app.use("/api/posts", postRoute);
app.use("/api/generals", generalRoute);
app.use("/api/commentReplies", commentReplyRoute);
app.use("/api/postComments", postCommentRoute);
app.use("/api/testimonials", testimonialRoute);
//----- logique socket :
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
  },
});
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});
// route de résérve :
app.use(handleError);
app.all("/*", (req, res) => {
  res.status(404);
  if (req.accepts("application/json")) {
    res.json("404 ressource not found");
  } else if (req.accepted("text/html")) {
    res.send("Html content , 404 not found");
  } else {
    res.type("text").send("Text content , 404 not found");
  }
});
connect(process.env.CONNECTION_STRING)
  .then(() => {
    server.listen(process.env.PORT || 5000, () => {
      console.log(`Server launched on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error trying to connect to the database " + err);
  });
