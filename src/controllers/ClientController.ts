import { Request, Response } from "express";
import prisma from "../prismaClient";
import clientSchema from "../validators/ClientValidator";

class ClientController{

	async getAll(request: Request, response: Response) {
		const registries = await prisma.client.findMany(
			{ orderBy: {
				name: "asc"
			} }
		);
		
		return response.json({
			response: registries
		});
	}

	async store(request: Request, response: Response) {
		const { body } = request;

		if (clientSchema) {
			const validation = clientSchema.validate(body, { abortEarly: false });

			if (validation.error) {
				return response.status(400).json({ message: validation.error.details});
			}
		}

		try {
			const registry = await prisma.client.create({
				data: body
			});

			response.json(registry);
		} catch (error) {
			console.error(error);
			response.status(400).send({ message: "Failed to insert" });
		}
	}

	async update(request: Request, response: Response) {
		const { id } = request.params;
		const { body } = request;
	
		if (clientSchema) {
			const validation = clientSchema.validate(body, { abortEarly: false });

			if (validation.error) {
				return response.status(400).json({ message: validation.error.details});
			}
		}
		try {
			const registry = await prisma.client.update(
				{
					data: request.body,
					where: { id }
				});
			response.json(registry);
		} catch (error) {	  
			response.status(404).json({ message: "Registry not found" });
		}
	}
}

export const clientController = new ClientController();