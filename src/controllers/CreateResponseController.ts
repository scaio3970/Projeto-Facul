import { Request,Response } from "express";
import { CreateResponseService } from "../services/response/CreateResponseService";

export class CreateResponseController{
    async handle(request:Request, response:Response){
        const {usuario, id_pergunta, pontuacao} = request.body

        const service =  new CreateResponseService();

        const result = await service.execute({usuario,id_pergunta,pontuacao})
    }
}