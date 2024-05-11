import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class task_catagory{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
    @Column()
    color: string;
}
