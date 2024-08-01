import User from "../model/userModel.js";

export const create= async(req,res)=>{
    try{
        const userData= new User(req.body);
        if(!userData)
        {
            return res.status(404).json({msg:"User data not found"});
        }

        const savedData= await userData.save();
        // res.status(200).json(savedData);
        res.status(200).json("data saved");
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

export const getAll= async(req,res)=>{
    try{
        const userData = await User.find();
        if(!userData)
        {
            return res.status(404).json({msg:"Users data not getting fetched"});
        }
        res.status(200).json(userData);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

export const getOne= async(req,res)=>{
    try{
        const id= req.params.id;
        const userData = await User.findById(id);
        if(!userData)
        {
            return res.status(404).json({msg:"not getting single user data"});
        }
        res.status(200).json(userData);
    }
    catch(error){
        res.status(500).json({error:error});
    }
}

export const update = async(req, res) =>{
    try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if(!userExist){
    return res.status(401).json({msg: "User not found"});
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});
    res.status(200).json(updatedData)
    }
    catch (error) {
    res.status(500).json({error: error});
    }
}
    
export const deleteUser = async(req, res) =>{
    try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if(!userExist){
    return res.status(401).json({msg: "User not found"});
    }
    await User.findByIdAndDelete(id);
    res.status(200).json("User deleted successfully")
    }
    catch (error) {
    res.status(500).json({error: error});
    }
}