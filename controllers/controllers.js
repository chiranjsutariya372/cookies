const passport = require("passport")
const user = require("../model/shcema")

const homepage=(req,res) => {
    res.render('index')
}
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
    // console.log(req.body);
    // res.render('index')
    res.render('blog')
}
const getblog=(req, res)=>{
    res.render('blog')
}
const postblog=async(req, res)=>{
    req.user.blog.push(req.body)
    await user.findByIdAndUpdate(req.user.id, req.user)
    console.log(req.body);
    res.send('welcome')
}
const blogpage=async(req, res)=>{
    let blogpage=await user.find()
    res.send(blogpage)
}

module.exports ={home,login,singup,session,loginget,loginpost,homepage,getblog,postblog,blogpage}