import { Request, Response } from "express";
import { GetAllAnswersService } from "../../services/Respostas/GetAllAnswersService";

export class GetAllAnswersController{
    async handle(request:Request, response:Response){
        const service = new GetAllAnswersService();

        const answers = await service.execute();

        return response.json(answers)
    }
}