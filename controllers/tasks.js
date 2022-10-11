const Task =require('../models/tasks')
const asyncWrapper= require('../middleware/async')
const getAllTasks= asyncWrapper( async (req,res)=>{
        //static functio name is find
        const tasks= await Task.find({})
        res.status(200).json({tasks})
})

const createTasks= async(req,res)=>{
    try{
        const task=await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({message:error})
    }
    
}

// const createTasks= aysnc(req,res) => {
//     // const task= await Task.create(req.body)
//     // res.status(200).json(req.body )
// }

const getTasks= async (req,res)=>{
    try {
        const {id:taskID}=req.params  //taskID is alias
        const task = await Task.findOne({_id:taskID})
            //time stamp 1:54 IMP to put return
        if(!task)
        {
            return res.status(404).json({mssg:`NO TASK WITH ID: ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({mssg:error})
    }
  
}



const deleteTasks= async (req,res)=>{
    try {
        const {id:taskID}=req.params;
        const task= await Task.findOneAndDelete({_id:taskID});
    //if such a task exists
    if(!task)
    {
        return res.status(404).json({mssg:`NO TASK WITH ID: ${taskID}`})
    }

        res.status(200).json({task});
        // or simply res.status(200).send;

    } catch (error) {
        res.status(500).json({mssg:error})
    }
    
}


const updateTasks= async (req,res)=>{
    try {
        const {id:taskID}=req.params;
        //IF YOU KEEP IT LIKE THIS THEN AFTER UPDATING ONCE, IF YOU SEND AN EMPTY STRING, WE STILL GET THE OLD UPDATE
        //const task= await Task.findOneAndUpdate({_id:taskID},req.body)

        const task= await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
            //for PUT method use overwrite:true
        })
        if(!task)
        {
            return res.status(404).json({mssg:`NO TASK WITH ID: ${taskID}`})
        }        


        res.status(200).json({id:taskID,data:req.body})//data bcos if you are updating some data you need to pass new value
    } catch (error) {
        res.status(500).json({mssg:error})
    }
}



module.exports={
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}