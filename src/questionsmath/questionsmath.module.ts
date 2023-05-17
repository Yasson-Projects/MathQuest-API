import { Module } from '@nestjs/common';
import { QuestionsmathController } from './questionsmath.controller';
import { QuestionsmathService } from './questionsmath.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionLists } from 'src/libs/typeorm/questions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionLists])],
  controllers: [QuestionsmathController],
  providers: [QuestionsmathService],
})
export class QuestionsmathModule {}
