const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const { cookies } = req;
    if(cookies.jwt){
        try{
            const data = jwt.verify(cookies.jwt, process.env.SECRET);
            req.id = data.id;
            return next();
        }catch(error){
            console.log(error.message);
        }
    }

    return res.status(401).send({
        success: false,
        message: "Sorry you are not authenticated."
    })
}

// const test = () => {
//     const token = jwt.sign({id: "Hello"}, "Secret", {expiresIn: '0s'});
//     try{
//         const data = jwt.verify(token, "Secret");
//         console.log(token, data);
//     }catch(error){
//         console.log(error.message);
//     }
// }

// test();
module.exports = {auth}