import { compare } from "bcryptjs";
import { getRepository } from "typeorm";
import { Usuario } from "../../models/Usuario";
import {sign} from 'jsonwebtoken';
import { Subject } from "typeorm/persistence/Subject";

type usuarioLoginRequest = {
    usuario:string,
    senha:string
}

export class SessionService{
    async execute({usuario, senha}:usuarioLoginRequest){
        const repo = getRepository(Usuario);

        const user = await repo.findOne({usuario});

        if(!user){
            return new Error("Usuario ou senha incorretos");
        }

        const matchPassword = await compare(senha, user.senha);

        if(!matchPassword){
            return new Error("Usuario ou senha incorretos");
        }
        delete user.senha
        const token = sign({user},process.env.SECRET,{
            expiresIn: '1d'
        });     

        return {token, user}
    }
}