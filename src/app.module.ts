import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionLists } from './libs/typeorm/questions.entity';
import { config } from 'dotenv';
import { QuestionsmathModule } from './questionsmath/questionsmath.module';
import { ClientRequest } from './libs/typeorm/client.entity';
import { URL } from 'url';

config();
console.log('------- Mathquest Api -------');
const dbUrl = new URL(process.env.DATABASE_URL);
const routingId = dbUrl.searchParams.get('options');
dbUrl.searchParams.delete('options');
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'cockroachdb',
      url: dbUrl.toString(),
      entities: [QuestionLists, ClientRequest],
      synchronize: true,
      ssl: true,
      extra: {
        options: routingId,
      },
    }),
    ConfigModule.forRoot(),
    QuestionsmathModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
