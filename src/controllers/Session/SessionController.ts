import { Request,Response } from "express";
import { SessionService } from "../../services/Session/SessionService";

export class SessionController{
    async handle(request:Request, response:Response){
        console.log(request.body)
        const {usuario, senha} = request.body;

        const service = new SessionService();

        const result = await service.execute({usuario,senha});


        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        response.cookie("token", result.token,{maxAge: 60000* 60 * 24})
        
        return response.json(result)

    }
}