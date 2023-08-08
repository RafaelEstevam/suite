const {Router} = require('express');
const TaskController = require('./controllers/tasks.controler');

const routes = Router();

routes.get('/', (req, res) => {
  return res.send("Hello World");
});

routes.get('/tasks', TaskController.all);
routes.get('/tasks/:id', TaskController.get);
routes.post('/tasks', TaskController.post);
routes.put('/tasks/:id', TaskController.put); 
routes.delete('/tasks/:id', TaskController.delete);

module.exports = routes;