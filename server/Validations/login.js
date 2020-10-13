const validor = require ("validator");
const isEmpty = require ("is-empty");

module.exports = function validateLoginInput (data) {
    let errors = { };

    data.email = !isEmpty(data.email) ? data.email : "" ;
    data.password = !isEmpty(data.password) ? data.password : "" ;

    //Email check
    if(validor.isEmpty(data.email)) {
        errors.email = "Email is required" ;
    } else if(!validor.isEmail(data.email)) {
        errors.email = "Email is invalid" ;
    }

    //Password check 
    if(validor.isEmpty(data.password)) {
        errors.password = "Password is required" ;
    }

    return {
        errors ,
        isValid: isEmpty(errors)
    };
};