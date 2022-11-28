import { getRepository } from "typeorm";
import { Cargo } from "../models/Cargo";


export class CreateRoleService{
    async excute(nome){
        const repo = getRepository(Cargo);

        const cargo = repo.create({nome})

        if(await repo.findOne(nome)){
            return new Error("Cargo já existe")
        }

        await repo.save(cargo)

        return cargo
    }
}