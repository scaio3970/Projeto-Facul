import {Entity,Column,PrimaryColumn,CreateDateColumn, ManyToOne, JoinColumn} from 'typeorm'
import {v4 as uuid } from "uuid"
import { Usuario } from './Usuario';

@Entity('respostas')
export class Respostas{

    @PrimaryColumn()
    id:string;

    @ManyToOne(() => Usuario)
    @JoinColumn({name: "id"})
    usuario:Usuario;

    @Column()
    id_pergunta:string;

    @Column()
    pontuacao:number;

    @CreateDateColumn()
    data_resposta:Date;

    constructor(){
        if(!this.id){
            this.id =uuid();
        }
    }
}