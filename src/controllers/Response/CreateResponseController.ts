import { Request,Response } from "express";
import { CreateResponseService } from "../../services/Respostas/CreateAnswersService";

export class CreateResponseController{
    async handle(request:Request, response:Response){
        const {id_pergunta, usuario, pontuacao} = request.body

        const service =  new CreateResponseService();

        const result = await service.execute({id_pergunta,usuario,pontuacao})

        if (result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}