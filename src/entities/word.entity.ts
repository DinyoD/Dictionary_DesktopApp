import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Language } from "./language.entity";

@Entity()
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  languageId: number;

  @ManyToOne(() => Language, (l: Language) => l.words)
  language: Language;
}
