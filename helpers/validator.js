const { check } = require('express-validator');

exports.registerValidator = [
    check('username', 'Username is Required.').not().isEmpty(),
    check('email', 'Please Enter a valid E-mail Address').isEmail().normalizeEmail({
        gmail_remove_dots:true
    }),
    check('password', 'Password is Required.').not().isEmpty(),

];

exports.loginValidator = [
    // check('email', 'Please Enter a valid E-mail Address').isEmail().normalizeEmail({
    //     gmail_remove_dots:true
    // }),
    check('username', 'Username is Required.').not().isEmpty(),
    check('password', 'Password is Required.').not().isEmpty(),

];