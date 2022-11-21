import { getRepository } from "typeorm";
import { Permissoes } from "../models/Permissoes";

type PermissionRequest = {
    nome:string
    descricao:string
}

export class PermissionService{
    async execute({nome, descricao}:PermissionRequest){
        const repo = getRepository(Permissoes);

        const permission = repo.create({nome,descricao});

        if(await repo.findOne({nome})){
            return new Error("Permissão já existe");
        }
        await repo.save(permission);
        return permission;
    }
}