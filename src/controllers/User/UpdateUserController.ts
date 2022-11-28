import { Request,Response } from "express";
import { UpdateUserService } from "../../services/User/UpdateUserService";

export class UpdateUserController{
    async handle(request:Request,response:Response){
        const {id} = request.params;
        const {usuario,senha} = request.body;

        const service = new UpdateUserService();

        const result = await service.execute({id, usuario,senha})

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}