import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: false })
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
