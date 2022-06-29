import Joi from "joi";

const ClientSchema = Joi.object({
	name: Joi.string().required(),
	phone: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
	address: Joi.string().required(),
});

export default ClientSchema;