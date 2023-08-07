const { ZodError } = require('zod');

const validate = schema => (req, res, next) => {
	console.log('pasosu aqui');
	try {
		schema.parse({
		params: req.params,
		query: req.query,
		body: req.body
		});

		return next();
	} catch (error) {
		if (error instanceof ZodError) {
		return res.status(400).json({
			status: 'fail',
			errors: error.errors
		});
		}
		return next(error);
	}
}

module.exports = validate;
