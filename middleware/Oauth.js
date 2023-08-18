const oauth= require('passport-google-oauth20').Strategy;

const googleAuth=(passport)=>{
    passport.use(new oauth(
        {
        clientId: '619023602807-3ik2uf8jjgil4ikuji16pp0nes3lbj1k.apps.googleusercontent.com',
        clientIdSecret: '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',
        callbackURL: 'http://localhost:8080/auth/google/callback'
        },
    
        function(accessToken, refreshToken, profile, done) {
            console.log(profile);
            return done(null, profile)
        }
    ))

    passport.serializeUser((user,done) => {
        done(null,user.id)
    })

    passport.deserializeUser(async(user,done) => {
        let IDfind=await user.find({id})
        done(null,IDfind)
    })
}

module.exports =googleAuth;