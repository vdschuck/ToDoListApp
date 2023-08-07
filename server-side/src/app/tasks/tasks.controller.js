const tasksModel = require('./tasks.model');

const getAll = async (request, response) => {
	const page = request.query.page || 1;
  	const limit = request.query.limit || 10;
  	const skip = (page - 1) * limit;

  	const tasks = await tasksModel.findAll({ limit, offset: skip });

	return response.status(200).json({
		status: 'success',
		data: tasks,
		page: page
	});
}

const create = async (request, response) => {
	const { title } = request.body;
	const status = 'pending';
  	const createdTask = await tasksModel.create({ title, status });

	return response.status(201).json({
		status: 'success',
		data: createdTask
	});
}

const update = async (request, response) => {
	const { title, status } = request.body;
	const updatedAt = Date.now();
  	const updatedTask = await tasksModel.update(
		{ title, status, updatedAt },
		{ 
			where: {
				id: request.params.id
			}
		});

	return response.status(200).json({
		status: 'success'
	});
}

const getById = async (request, response) => {
  	const task = await tasksModel.findByPk(request.params.id);

	return response.status(200).json({
		status: 'success',
		data: task
	});
}

module.exports = {
  	getAll,
	create,
	update,
	getById
}