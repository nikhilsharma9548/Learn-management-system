import jwt from 'jsonwebtoken';

const userAuth = async(req, res, next) => {

    const {token} = req.cookies;

    if(!token) {
        return res.json({success: false, message: "not authorized user"})
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            if(!req.body) req.body = {},
            req.body.userId = tokenDecode.id;
            next();
           }else{
            return res.json({success: false, message:"not authorized....."})
           }
        
    } catch (error) {
        return res.json({success: false, message:"data not found"});
    }
}
export default userAuth;