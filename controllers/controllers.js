const user = require("../model/shcema")

const home=(req,res)=>{
    res.render('index')
}
const singup=(req,res)=>{
    res.render('singup')
}
const session=(req,res)=>{
    if(req.session.visit){
        (req.session.visit++)
        res.send(`visit ${req.session.visit}`)
    }
    else{
        req.session.visit=1;
        res.send(`visit ${req.session.visit}`)
    }
}
const login=async(req,res)=>{
    console.log(req.body);
    const {username,password} =req.body;
    // await user.save();            
    await user.create(req.body)
    res.cookie('token',username)
    res.render('index')
 
}
const loginget=(req,res) => {
    res.render('login')
}
const loginpost=async(req,res) => {
    let usercheck=await user.findOne({username})
    if(!usercheck){
        res.send('user not found')
    }
    else if(usercheck.password !== req.body.password){
        res.send('password incorrect')
    }
    else{
        res.render('index')
    }
}

module.exports ={home,login,singup,session,loginget,loginpost}