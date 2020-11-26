
import { registerService, unRegisterService } from '@services';

export const register = (req, res)=> {
    const { email, nickname, password } = req.body;
    try {
        registerService({ email, nickname, password })
        .then((response)=> {
            res.json({
                data: response.data,
                message: response.message
            })
        })
        .catch((response)=> {
            res.json({
                data: null,
                message: response.message
            })
        });
    } 
    catch(err) {
        res.json({
            data: null,
            message: "register controller is not working"
        })
    }
}

export const unRegister = (req, res)=> {
    const { email } = req.body;
    try {
        unRegisterService({ email })
        .then((response)=> {
            res.json({
                data: response.data,
                message: response.message
            })
        })
        .catch((response)=> {
            res.json({
                data: null,
                message: response.message
            })
        });
    } 
    catch(err) {
        res.json({
            data: null,
            message: "unregister controller is not working"
        })
    }

}