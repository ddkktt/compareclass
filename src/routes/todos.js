const router = require('express').Router();
const controller = require('./../controllers/todos.controller');
const middlewear = require('./../middlewares/auth')

router.get('', middlewear,controller.list2)

module.exports = router;