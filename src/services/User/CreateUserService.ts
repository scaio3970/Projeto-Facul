import { getRepository } from "typeorm";
import { Usuario } from "../../models/Usuario";
import {hash} from 'bcryptjs';

type registerRequest = {
    usuario:string,
    senha:string
}

export class CreateUserService{
    
    async execute({usuario, senha}:registerRequest):Promise<Usuario | Error>{
        const repo = getRepository(Usuario);

        const senhaHash = await hash(senha, 8);

        const user = repo.create({usuario,senha:senhaHash});

        //SELECT * FROM usuarios WHERE usuario = "usuario"
        if(await repo.findOne({usuario})){
            return new Error("Usuario já existe");   
        }

        await repo.save(user);

            delete user.senha;
        return(user);
    }

}