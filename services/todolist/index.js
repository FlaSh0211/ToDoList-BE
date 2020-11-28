import Todolist from '@db/model/todolist';
import { checkTodolist } from '@lib/validation/format';

export const createService = async({ email, content, date })=> {
    let response = null;
    const isValid = checkTodolist({ email, content, date });
    if(!isValid) {
        return response = {
            data: null,
            message: "todolist schema invalid"
        }
    }
    try{
        const result = await Todolist.create({ email, content, date });
        return response = {
            data: result,
            message: "todolist created"
        }
    }
    catch(err) {
        return response = {
            data: null,
            message: "todolist create fail"
        }
    }
}
export const deleteListService = async({ _id })=> {
    let response = null;
    try {
        const result = await Todolist.deleteList({ _id });
        return response = {
            data: result,
            message: "delete success"
        }
    }
    catch (err) {
        return response = {
            data: null,
            message: "delete fail"
        }
    }
}
export const deleteDayService = async({ date })=> {
    let response = null;
    try {
        const result = await Todolist.deleteDay({ date });
        return response = {
            data: result,
            message: "delete success"
        }
    }
    catch (err) {
        return response = {
            data: null,
            message: "delete fail"
        }
    }
}
export const updateService = async({ _id, content })=> {
    let response = null;
    try {
        const result = await Todolist.update({ _id, content });
        return response = {
            data: result,
            message: "update success"
        }
    }
    catch (err) {
        return response = {
            data: null,
            message: "update fail"
        }
    }
}
export const getService = async({ email })=> {
    let response = null;
    try {
        const result = await Todolist.get({ email });
        return response = {
            data: result,
            message: "get success"
        }
    }
    catch (err) {
        return response = {
            data: null,
            message: "get fail"
        }
    }
}