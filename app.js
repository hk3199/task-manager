const express= require('express')
const app= express()
const tasks= require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound= require('./middleware/not-found')
const errorHandlerMiddleware= require('./middleware/error-handler')
//middleware
app.use(express.static('./public'))
app.use(express.json())   
//if we don't use this then we'll not have data in req.body



//routes

// app.get('/task',(req,res)=>{
//   res.send('task manager')
// })

app.use('/api/v1/tasks',tasks )

//
app.use(notFound)
app.use(errorHandlerMiddleware)


const port=8080;

const start= async () => {
    try{
        await connectDB(process.env.MONGO_URI)
       app.listen(port, console.log(`server is listenning on port:${port}`));
    }
    catch(error){
console.log(error)
    }
}


start();