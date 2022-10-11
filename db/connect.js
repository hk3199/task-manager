const mongoose= require ('mongoose')
// const connectionString=mongodb+srv://Mongo:FrPfOcMWDDDojGqh@cluster0.2rhm2az.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority;
//we are going to pass second argument which is going to be an object to avoid the deprecation values 

const connectDB = (url) => {
    // mongoose.connect(connectionString,{
        mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log('connected to db...')})
    .catch((error)=>{console.log(error)});
}


//if we have a function in a module where the func  is executed there and then we only need to import the module and that  will
// execute the function

module.exports=connectDB;//above comment doesn't apply for this action