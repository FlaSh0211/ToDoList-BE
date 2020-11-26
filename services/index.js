

import { checkRegister } from '@lib/validation/format';
import User from '@db/model/users';

export const registerService = ({ email, nickname, password })=> 
    new Promise ((resolve, reject)=> {
        let response = null;
        const isValid = checkRegister({ email, nickname, password });
        if(!isValid) {
            reject(
                response = {
                data: null,
                message: "register data is not valid"
            }) 
        }
        User.register({ email, nickname, password })
        .then((user)=> {
            resolve(
                response = {
                    data: user,
                    message: 'register success'
                }
            )
        })
        .catch((err)=> {
            reject(err)
        }); 
    }
)