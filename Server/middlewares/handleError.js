const handleError = (err,req,res,next)=>{
    res.status(err.code || 500).json(err.message || "An unknown internal server error occured !"); 
}

module.exports = handleError; 