import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionLists } from 'src/libs/typeorm/questions.entity';
import { ClientRequest } from 'src/libs/typeorm/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionLists, ClientRequest])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
