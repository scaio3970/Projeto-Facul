import {Entity,Column,PrimaryColumn, CreateDateColumn} from 'typeorm'
import {v4 as uuid } from "uuid"

@Entity('permissoes')
export class Permissoes{

    @PrimaryColumn()
    id:string;

    @Column()
    nome:string;

    @Column()
    descricao:string;

    @CreateDateColumn()
    criado_em:Date

    constructor(){
        if(!this.id){
            this.id =uuid();
        }
    }
}