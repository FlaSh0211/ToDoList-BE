
import { registerService, unRegisterService, updateService } from '@services/auth';

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
    try {
        const { user } = req.body;
        unRegisterService({ email: user.email })
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

export const update = (req, res)=> {
    try {
        const { user, nickname, password } = req.body;
        updateService({ email: user.email, nickname, password })
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