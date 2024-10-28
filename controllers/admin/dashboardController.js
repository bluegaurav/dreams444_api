const Role = require('../../models/roleModel');

const { validationResult } = require('express-validator');

// Get All Roles API Method

const getData = async(req, res) => {

    try {

        const roles = await Role.find({
            value: {
                $ne:1
            }
        });

        return res.status(200).json({
            success: true,
            msg: 'All Roles Data Fetched Successfully!',
            data: roles
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }

}

module.exports = {
    getData
}