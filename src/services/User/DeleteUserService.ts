import { getRepository } from "typeorm";
import { Usuario } from "../../models/Usuario";


export class DeleteUserService{
    async exucute(id:string){
        const repo = getRepository(Usuario);

        if(!await repo.findOne({id})){
            return new Error("Usuário não existe!");
        }

        await repo.delete(id);

        

    }
}