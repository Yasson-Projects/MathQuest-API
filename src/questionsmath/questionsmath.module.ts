import { Module } from '@nestjs/common';
import { QuestionsmathController } from './questionsmath.controller';
import { QuestionsmathService } from './questionsmath.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionLists } from 'src/libs/typeorm/questions.entity';
import { ClientRequest } from 'src/libs/typeorm/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionLists, ClientRequest])],
  controllers: [QuestionsmathController],
  providers: [QuestionsmathService],
})
export class QuestionsmathModule {}
