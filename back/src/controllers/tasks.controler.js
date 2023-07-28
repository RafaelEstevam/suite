const TaskController = {
  get(req, res) {
    const {body, params, query} = req;
    return res.status(200).send('task 123');
  },
  post(req, res) {
    const {body, params, query} = req;
    return res.status(200).json(body);
  },
  put(req, res) {
    const {body, params, query} = req;
    return res.status(200).json(body);
  },
  delete(req, res) {
    const {body, params, query} = req;
    return res.status(200).send("delete");
  },
  all(req, res) {
    const {body, params, query} = req;
    return res.status(200).send(['list all']);
  }
};

module.exports = TaskController;
