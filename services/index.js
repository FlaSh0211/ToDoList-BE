

import { checkRegister } from '@lib/validation/format';
import User from '@db/model/users';

export const registerService = ({ email, nickname, password })=> 
    new Promise ((resolve, reject)=> {
        let response = null;
        const isValid = checkRegister({ email, nickname, password });
        console.log(isValid);
        if(!isValid) {
            reject(
                response = {
                    data: null,
                    message: "register data is not valid"
                }
            ) 
            return;
        }
        User.register({ email, nickname, password })
        .then((user)=> {
            resolve(
                response = {
                    data: user,
                    message: 'register success'
                }
            )
            return;
        })
        .catch((err)=> {
            reject(err)
        }); 
    }
)

export const unRegisterService = ({ email })=> 
    new Promise ((resolve, reject)=> {
        let response = null;
        User.unRegister({ email })
        .then((result)=> {
            resolve(
                response = {
                    data: result,
                    message: 'unregister success'
                }
            )
        })
        .catch((err)=> {
            reject(err)
        }); 
    }
)