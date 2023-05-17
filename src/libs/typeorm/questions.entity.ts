import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'question_list' })
export class QuestionLists {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  category!: string;

  @Column()
  question!: string;

  @Column()
  r1!: number;

  @Column()
  r2!: number;

  @Column()
  r3!: number;

  @Column()
  r4!: number;

  @Column()
  correct!: number;
}
