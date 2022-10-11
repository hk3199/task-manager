const errorHandlerMiddleware= (error,res,req,next) =>{
   return res.status(500).json({mssg:error})
}


module.exports= errorHandlerMiddleware