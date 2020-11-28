import { createService } from '@services/todolist';

export const create = async(req, res) => {
    const { user, content, date } = req.body;
    try {
        const response = await createService({ email: user.email, content, date });
        res.json({
            data: response.data,
            message: response.message
        }) 
    }
    catch(err) {
        res.json({
            data: null,
            message: "create controller is not working"
        })
    }
}

