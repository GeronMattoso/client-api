import { Request, Response } from "express";
import prisma from "../prismaClient";

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
		response.send({ message: "Insert" });
	}
}



export const clientController = new ClientController();