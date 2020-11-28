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

}
export const deletDayService = async({ date })=> {

}
export const updateService = async({ _id, content })=> {

}
export const getService = async({ email })=> {

}