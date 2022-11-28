import { getRepository } from "typeorm";
import { Cargo } from "../models/Cargo";


export class GetAllRoleService{
    async execute(){
        const repo = getRepository(Cargo)

        const roles = await repo.find()

        return roles;
    }
}