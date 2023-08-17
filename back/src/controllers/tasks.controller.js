const {v4} = require('uuid');

let mockTasks = [
  {
    id: "a8b1bdea-f935-4ce2-9109-4f413b6e33ee",
    taskName: "teste 123"
  }
];

const TaskController = {
  get(req, res) {
    const {params} = req;
    let findedTask = mockTasks.find((item) => item.id === params.id);
    return res.status(200).send(findedTask);
  },

  post(req, res) {
    const {body} = req;
    mockTasks = [...mockTasks, {id: v4(), taskName: body.taskName}]
    return res.status(200).json(body);
  },

  put(req, res) {
    const {body} = req;
    let findedTask = mockTasks.find((item) => item.id === body.id);
    if(!findedTask){
      return res.status(500).send("Cannot be edited");
    }
    mockTasks = mockTasks.map((item) => {
      if(item.id === body.id){
        item = body
      };
      return item;
    });
    findedTask = mockTasks.find((item) => item.id === body.id);
    return res.status(200).json(findedTask);
  },

  delete(req, res) {
    const {params} = req;
    let findedTask = mockTasks.find((item) => item.id === params.id);
    if(!findedTask){
      return res.status(500).send("Cannot be deleted");
    }
    mockTasks = mockTasks.filter((item) => item.id !== params.id);
    return res.status(204).send("delete");
  },
  
  all(req, res) {
    return res.status(200).send(mockTasks);
  }
};

module.exports = TaskController;
