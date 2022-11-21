import {Entity,Column,PrimaryColumn,CreateDateColumn, ManyToOne} from 'typeorm'
import {v4 as uuid } from "uuid"
import { Usuario } from './Usuario';

@Entity('funcionario')
export class Funciorario{

    @PrimaryColumn()
    id:string;

    @Column()
    nome:string;

    @Column()
    email:string;

    @Column()
    id_cargo:number;

    @CreateDateColumn()
    data_resposta:Date;

    constructor(){
        if(!this.id){
            this.id =uuid();
        }
    }
}