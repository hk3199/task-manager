const mongoose=require('mongoose')
// i want a string and boolean for task completion
const TaskSchema= new mongoose.Schema({
    //adding validators
    name:{
        //not types
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[20,'cannot be more than 20']
    },
    completed:{
        type:Boolean,
        default:false 
    }
})

module.exports=mongoose.model('Task',TaskSchema)//model and not models