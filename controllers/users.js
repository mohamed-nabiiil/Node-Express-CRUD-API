const {v4 :uuidv4} = require('uuid');

let users=[];


const GetUsers = (req,res)=>{
    res.send(users);
}

const CreateUser = (req,res)=>{
    const user = req.body;
    users.push({...user,id:uuidv4()});
    res.send(`User with the name ${user.username} added to the database`);
}
const GetUserID = (req,res)=>{
    const {id}=req.params;
    const founduser = users.find((user)=>user.id===id);
    res.send(founduser);
}
const DeleteUser = (req,res)=>{
    const {id}=req.params;
    users = users.filter((user)=>user.id !== id);
    res.send(`User With the ID ${id} Deleted from Database!`);
}
const UpdateUser = (req,res)=>{
    const {id}=req.params;
    const user= users.find((user)=>user.id ===id);
    user.username = req.body.username;
    user.age = req.body.age;
    res.send(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
}



module.exports ={CreateUser ,GetUsers,GetUserID,DeleteUser,UpdateUser};