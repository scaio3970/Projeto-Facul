import {Entity,Column,PrimaryColumn,CreateDateColumn, ManyToOne} from 'typeorm'
import {v4 as uuid } from "uuid"
import { Usuario } from './Usuario';

@Entity('cargo')
export class Cargo{

    @PrimaryColumn()
    id:string;

    @Column()
    nome:string;

    constructor(){
        if(!this.id){
            this.id =uuid();
        }
    }
}