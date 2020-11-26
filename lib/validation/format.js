import Ajv from 'ajv';

const ajv = new Ajv();
const registerSchema = {
    "type": "object",
    "required": ["email", "nickname", "password"],
    "properties": {
        "email": { 
            "type": "string",
            "format": "email"

        },
        "nickname": {
            "type": "string",
        },
        "password": {
            "type": "string",
            "minLength": 5,
        }
    },
};

const loginSchema = {
    "type": "object",
    "properties": {
        "email": { 
            "type": "string",
            "format": "email"

        },
        "password": {
            "type": "string",
            "minLength": 5,
        }
    },
    "required": ["email", "password"] 
};


export const checkRegister = ajv.compile(registerSchema);
export const checkLogin = ajv.compile(loginSchema);

