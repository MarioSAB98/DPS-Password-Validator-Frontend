import Joi from 'joi'

export const validateSignup = (signupObject) => {

    const schema = Joi.object({
        fullname: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
            .messages({
                'string.empty': 'Name is required',
                'string.base': 'Name must be a string',
                'string.min': 'Name must be at least {#limit} characters long',
                'string.max': 'Name must be at most {#limit} characters long',
                'any.required': 'Email is required',
            }),

        email: Joi.string()
            .required()
            .email({ minDomainSegments: 2, tlds: { allow: false } })
            .messages({
                'string.empty': 'Email is required',
                'string.base': 'Email must be a string',
                'string.email': 'Invalid email format',
                'any.required': 'Email is required',
            }),

        password: Joi.string()
            .min(8)
            .max(16)
            .required()
            .pattern(new RegExp(/^((.*\d))([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]*)$/))
            .messages({
                'string.empty': 'Password is required',
                'string.base': 'Password must be a string',
                'string.min': 'Password must be at least {#limit} characters long',
                'string.max': 'Password must be at most {#limit} characters long',
                'string.pattern.base': 'Password must contain at least one digit and any letters',
                'any.required': 'Password is required',
            }),

        password_repeat: Joi.any()
            .valid(Joi.ref('password'))
            .required()
            .messages({
                '*': 'passwords must match',
            }),
    })


    const { error } = schema.validate(signupObject, { abortEarly: false });

    if (error) {
        let errDetails = {};
        error.details.forEach((err) => {
            // Assuming err.path[0] is a string representing the key
            errDetails = { ...errDetails, [err.path[0]]: err.message };
        });

        return errDetails;
    }
    return {};
}

export const validateLogin = (loginObject) => {

    const schema = Joi.object({

        email: Joi.string()
            .required()
            .email({ minDomainSegments: 2, tlds: { allow: false } })
            .messages({
                'string.empty': 'Email is required',
                'string.base': 'Email must be a string',
                'string.email': 'Invalid email format',
                'any.required': 'Email is required',
            }),

        password: Joi.string()
            .min(8)
            .max(16)
            .required()
            .pattern(new RegExp(/^((.*\d))([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]*)$/))
            .messages({
                'string.empty': 'Password is required',
                'string.base': 'Password must be a string',
                'string.min': 'Password must be at least {#limit} characters long',
                'string.max': 'Password must be at most {#limit} characters long',
                'string.pattern.base': 'Password must contain at least one digit and any letters',
                'any.required': 'Password is required',
            }),

    })


    const { error } = schema.validate(loginObject, { abortEarly: false });

    if (error) {

        let errDetails = {};
        error.details.forEach((err) => {
            // Assuming err.path[0] is a string representing the key
            errDetails = { ...errDetails, [err.path[0]]: err.message };
        });

        return errDetails;

    }
    return {};
}
