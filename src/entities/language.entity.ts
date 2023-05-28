import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Word } from "./word.entity";

@Entity()
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Word, (w: Word) => w.language)
  words: Word[];
}
