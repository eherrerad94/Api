import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import user from '../models/user';

const register = (usr) => {
    var newUser = new user(usr);

    newUser.hash_password = bcrypt.hashSync(usr.password, 10);
    return newUser
        .save()
        .then(user => {
            return user;
        })
        .catch(err => {
            console.log("Error: ", err);
            var response = {
                message: 'Something went wrong',
                error: err
            }
            return response;
        })
}
const sign_in = (email, password) => {
    let message;
    return user
        .findOne({ email: email })
        .then(user => {
            // console.log(user);
            if (user == null) {
                message = 'Authentication failed, User not found';
                return message;

            }
            else if (user){
                console.log( !bcrypt.compareSync(password, user.hash_password));
                if(!bcrypt.compareSync(password, user.hash_password)){
                    return { message: 'Authentication failed. Wrong password.' };

                }else{
                    var token = jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs')
                    
                    return ({message: "Credentials are correct, here is your token", token: token} );

                }

              //  console.log(user.comparePassword(password));
             //   return user;
            //    if (!user.comparePassword(password)) {
            //     } else {
            //     }

            }
            // if (!user) {
            //     // res
            //     //     .status(401)
            //     //     .json({ message: 'Authentication failed. User not found.' });
            // }
            // else if (user) {
            //     if (!user.comparePassword(password)) {
            //         message = "Authentication failed, wrong password";
            //         return message;
            //         // res.status(401).json({ message: 'Authentication failed. Wrong password.' });
            //     }
            //     else {
            //         let token = jwt.sign({ email: user.email, name: user.name, _id: user._id });

            //         return token;
            //         // return res
            //         //     .json({
            //         //         token: jwt.sign(
            //         //             { 
            //         //                 email: user.email, 
            //         //                 fullName: user.fullName, 
            //         //                 _id: user._id 
            //         //             },
            //         //         'RESTFULAPIs')      
            //         //     });
            //     }
            // }
        })
        .catch(err => {
            console.log("Error: ", err);
            message = 'Something went wrong';
            return message;
        })
}
const login_required = (req, res, next) => {
    if (req.user)
        next();
    else
        return res.status(400).json({ message: 'Unauthorized user' });
}


module.exports = {
    register,
    sign_in,
    login_required
}


// https://www.codementor.io/olatundegaruba/5-steps-to-authenticating-node-js-with-jwt-7ahb5dmyr