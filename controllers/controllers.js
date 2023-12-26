const passport = require("passport")
const jwt=require("jsonwebtoken")
const user = require("../model/shcema")

const homepage = (req, res) => {
    res.render('index')
}
const home = async(req, res) => { 
    const {token} = req.cookies;
    if(token){
        const decode = jwt.verify(token, "Hellohgifdighidfugydg$%retre%$");
        req.data = await user.findById(decode._id);
        res.render('index')
    }
    else{
        res.render(login)
    }
}
const singup = (req, res) => {
    res.render('singup')
}
const session = (req, res) => {
    if (req.session.visit) {
        (req.session.visit++)
        res.send(`visit ${req.session.visit}`)
    }
    else {
        req.session.visit = 1;
        res.send(`visit ${req.session.visit}`)
    }
}
const login = async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;        
    await user.create(req.body)
    let payload={
        username:req.body.username,
        email:req.body.email
    }
    let token=jwt.sign(payload,"Key")
    console.log(token); 
    res.cookie('token', "Hellohgifdighidfugydg$%retre%$")
    res.render('index')

}
const jwttoken=(req,res)=>{
    let decode=jwt.verify(req.body.token,"Key")
    console.log(decode);
    res.send(decode)
}
const loginget = (req, res) => {
    res.render('login')
}
const loginpost = async (req, res) => {
    res.render('blog')
}
const getblog = (req, res) => {
    res.render('blog')
}
const postblog = async (req, res) => {
    req.user.blog.push(req.body)
    await user.findByIdAndUpdate(req.user.id, req.user)
    console.log(req.body);
    res.send('welcome')
}

module.exports = { home, login, singup, session, loginget, loginpost, homepage, getblog, postblog,jwttoken }