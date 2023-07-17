import { CategoryType } from 'src/libs/confs';

export class QuestionDto {
  category: CategoryType;
  question: string;
  r1: number;
  r2: number;
  r3: number;
  r4: number;
  correct: number;
}
