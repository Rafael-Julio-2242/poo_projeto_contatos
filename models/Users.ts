import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    Email!: string

    @Column()
    Nome!: string

    @Column()
    Senha!: string

}