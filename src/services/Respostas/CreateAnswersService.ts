import { getRepository } from "typeorm";
import { Respostas } from "../../models/Respostas";
import { Usuario } from "../../models/Usuario";


export class CreateResponseService {
    async execute({id_pergunta, usuario,pontuacao}){
        const repo = getRepository(Respostas);

        const userRepo = getRepository(Usuario);

        const resposta = repo.create({usuario,id_pergunta,pontuacao})

        if(!await userRepo.find({usuario})){
            return new Error("Usuário não existe")
        }

        await repo.save(resposta)

        return resposta

    }

}