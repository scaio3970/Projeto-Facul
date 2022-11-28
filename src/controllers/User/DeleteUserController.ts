import { Request,Response } from "express";
import { JwtVerifyService } from "../../services/JwtVerifyService";
import { DeleteUserService } from "../../services/User/DeleteUserService";

export class DeleteUserController{
    async handle(request:Request,response:Response){
        const decoder =new JwtVerifyService()

        const {id} = request.params;

        const service =new DeleteUserService();

        const token = request.cookies.token
        decoder.decoder(token)
        console.log(token)

        const result = await service.exucute(token, id);

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(204).json()
    }
}