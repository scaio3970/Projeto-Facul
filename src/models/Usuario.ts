import {Entity,Column,PrimaryColumn} from 'typeorm'
import {v4 as uuid } from "uuid"

@Entity('usuario')
export class Usuario{

    @PrimaryColumn()
    id:string;

    @Column()
    usuario:string;

    @Column()
    senha:string;

    constructor(){
        if(!this.id){
            this.id =uuid();
        }
    }
}