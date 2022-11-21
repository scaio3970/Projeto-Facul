import { getRepository } from "typeorm";
import { Usuario } from "../../models/Usuario";


export class GetAllUsersService {
    async execute(){
        const repo = getRepository(Usuario);

        const users = await repo.find();

        return users;

    }
}