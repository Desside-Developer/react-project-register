const Validator = require('validator');
const IsEmpty = require('./IsEmpty');

const validateRegisterInput = (data) => {
    let errors = {};

    // check the email field
    if(IsEmpty(data.email)) {
        errors.email = 'Email field cano not be empty';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid, please provide a valid email";
      }

    //check password field
    if(IsEmpty(data.password)) {
        errors.password = 'Password field can not be empty';
    } else if(!Validator.isLength(data.password, {min: 6, max: 150})) {
        errors.password = 'Password must be between 6 and 150 characters long';
    }

    //check name field
    if(IsEmpty(data.name)) {
        errors.name = 'Name field can not be empty';
    } else if(!Validator.isLength(data.name, {min: 2, max: 30})) {
        errors.name = 'Name must be between 2 and 30 characters long';
    }

    // check confirm password field
    if(IsEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Confirm password field can not be empty';
    } else if(!Validator.equals(data.password, data.confirmPassword)) {
        errors.ConfirmPassword = 'Password and confirm password fields must match';
    }

    return {
        errors, 
        isValid: IsEmpty(errors),
    }
} 

module.exports = validateRegisterInput;