import { getRepository } from "typeorm";
import { Usuario } from "../../models/Usuario";
import { JwtVerifyService } from "../JwtVerifyService";


export class DeleteUserService{
    async exucute(token,id:string){
        const repo = getRepository(Usuario);

        if(!await repo.findOne({id})){
            return new Error("Usuário não existe!");
        }

        
        await repo.delete(id);

        

    }
}