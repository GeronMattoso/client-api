import Joi from "joi";

const ClientSchema = Joi.object({
	name: Joi.string().required(),
	phone: Joi.string().pattern(/^[0-9]+$/).required(),
	address: Joi.string().required(),
});

export default ClientSchema;