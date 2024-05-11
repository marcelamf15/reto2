import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Task_Status {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
 
}
