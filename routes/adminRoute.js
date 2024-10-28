const express = require('express');
const router = express();

const auth = require('../middlewares/authMiddleware');
const { OnlyAdminCanAccess } = require('../middlewares/adminMiddleware');
const { permissionAddValidator, permissionDeleteValidator, permissionUpdateValidator, storeRoleValidator } = require('../helpers/adminValidator');


const permissionController = require('../controllers/admin/permissionController');
const roleController = require('../controllers/admin/roleController');
const DashboardController = require('../controllers/admin/dashboardController');

// Authenticated Routes Starts Here (authorization token needed) -----------


// Permissions Routes

router.post('/add-permission', auth, OnlyAdminCanAccess, permissionAddValidator, permissionController.addPermission);
router.get('/get-permissions', auth, OnlyAdminCanAccess, permissionController.getPermission);
router.post('/delete-permission', auth, OnlyAdminCanAccess, permissionDeleteValidator, permissionController.deletePermission);
router.post('/update-permission', auth, OnlyAdminCanAccess, permissionUpdateValidator, permissionController.updatePermission);

// Roles Routes
router.post('/store-role', auth, OnlyAdminCanAccess, storeRoleValidator, roleController.storeRole);
router.get('/get-roles', auth, OnlyAdminCanAccess, roleController.getRoles);

//Dashbaord Routes
router.get('/dashboard', auth, OnlyAdminCanAccess, DashboardController.getData);

module.exports = router;