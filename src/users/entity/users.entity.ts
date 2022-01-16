import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id : Number;

    @Column()
    email : String;

    @Column()
    username : String;

    @Column('enum')
    usertype : 'personal' | 'business';

    @Column()
    password : String;

    @Column()
    phonenumber : String;

    @Column()
    GSTnumber : String;

    @Column()
    address : String;   
}
