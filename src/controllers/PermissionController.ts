import { Request,Response } from "express";
import { PermissionService } from "../services/PermisionService";

export class PermissionController{
    async handle(request:Request, response:Response){
        const {nome, descricao} = request.body;

        const service = new PermissionService();

        const result = await service.execute({nome,descricao});

        if( result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}