const router = require('express').Router();
const validate = require('../../middlewares/validate');
const tasksController = require('./tasks.controller');
const { taskCreateSchema, taskUpdateSchema } = require('./tasks.schema');

router.get('/tasks', tasksController.getAll);
router.post('/task', validate(taskCreateSchema), tasksController.create);
router.put('/task/:id', validate(taskUpdateSchema),  tasksController.update);
router.get('/task/:id', tasksController.getById);

module.exports = router;
