import { getRepository } from "typeorm";
import { Usuario } from "../../models/Usuario";

type usuarioUpdateRequest = {
    id:string
    usuario:string,
    senha:string
}

export class UpdateUserService{
    async execute({id,usuario,senha}:usuarioUpdateRequest){
        const repo = getRepository(Usuario);

        const user = await repo.findOne({id});

        if (!user){
            return new Error("Usuario não existe")
        }

        user.usuario = usuario ? usuario: user.usuario;

        user.senha = senha ? senha: user.senha;

        await repo.save(user);

        return user;
    }
}