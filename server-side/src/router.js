const router = require('express').Router();
const tasksRouter = require('./app/tasks/tasks.router');

router.use(tasksRouter);

router.get('/ready-probe', (request, response) => response.status(200).send('Application is running'));

module.exports = router;
