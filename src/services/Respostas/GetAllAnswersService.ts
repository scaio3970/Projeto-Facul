import { getRepository } from "typeorm";
import { Respostas } from "../../models/Respostas";



export class GetAllAnswersService{
    async execute(){
        const repo = getRepository(Respostas)

        const answers = repo.find()

        return answers
    }
}