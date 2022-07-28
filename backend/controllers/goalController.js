// @desc Get Goals
// @route GET/api/goals
// @access Private
const getGoals = (req,res)=>{

    if(res!==undefined){
        res.status(200).json({
            message: "get Goals"
        })
    } 
    else console.log("undefined Parameters")
}

// @desc set Goal
// @route POST/api/goals
// @access Private
const setGoals = (req,res)=>{

    if(res!==undefined){
        res.status(200).json({
            message: "set Goals"
        })
    } 
    else console.log("undefined Parameters")
}

// @desc Update Goals
// @route PUT/api/goals/:id
// @access Private
const updateGoals = (req,res)=>{

    if(res!==undefined){
        res.status(200).json({
            message: `update goals ${req.params.id}`
        })
    } 
    else console.log("undefined Parameters")
}

// @desc Delete Goal
// @route DELETE/api/goals/:id
// @access Private
const deleteGoals = (req,res)=>{

    if(res!==undefined){
        res.status(200).json({
            message: `Delete goals ${req.params.id}`
        })
    } 
    else console.log("undefined Parameters")
}


module.exports ={
    getGoals,setGoals,updateGoals,deleteGoals
}