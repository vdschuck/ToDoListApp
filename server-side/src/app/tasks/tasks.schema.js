const { z } = require('zod');

const taskCreateSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
	  invalid_type_error: "Title must be a string",

    }).min(5, {
		message: "Must be 5 or more characters long"
	})
  })
});

const params = z.object({
  id: z.string()
});

const taskUpdateSchema = z.object({
  params,
  body: z
    .object({
      title: z.string({
		required_error: 'Title is required',
		invalid_type_error: "Title must be a string",
	  }).min(5, {
		message: "Must be 5 or more characters long"
	}),
    status: z.string({
		required_error: 'Status is required',
		invalid_type_error: "Status must be a string",
	  }),
    })
    .partial()
});

const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10)
});

module.exports = {
	taskCreateSchema,
	taskUpdateSchema,
	params,
	filterQuery
}
