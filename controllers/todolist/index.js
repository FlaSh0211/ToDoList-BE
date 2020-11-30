import { createService, deleteDayService, deleteListService, updateService, getService } from '@services/todolist';

export const create = async(req, res) => {
    const { user, content, date, type } = req.body;
    try {
        await createService({ email: user.email, content, date, type });
        const response = await getService({ email: user.email });

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

export const deleteDay = async(req, res) => {
    const { date } = req.body;
    try {
        const response = await deleteDayService({ date });
        res.json({
            data: response.data,
            message: response.message
        }) 
    }
    catch(err) {
        res.json({
            data: null,
            message: "deleteDay controller is not working"
        })
    }
}

export const deleteList = async(req, res) => {
    const { _id } = req.body;
    try {
        const response = await deleteListService({ _id });
        res.json({
            data: response.data,
            message: response.message
        }) 
    }
    catch(err) {
        res.json({
            data: null,
            message: "deleteList controller is not working"
        })
    }
}

export const get = async(req, res) => {
    const { user } = req.body;
    try {
        const response = await getService({ email: user.email });
        res.json({
            data: response.data,
            message: response.message
        }) 
    }
    catch(err) {
        res.json({
            data: null,
            message: "get controller is not working"
        })
    }
}

export const update = async(req, res) => {
    const {  _id, content } = req.body;
    try {
        const response = await updateService({ content, _id });
        res.json({
            data: response.data,
            message: response.message
        }) 
    }
    catch(err) {
        res.json({
            data: null,
            message: "update controller is not working"
        })
    }
}
