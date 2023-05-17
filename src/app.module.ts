import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionLists } from './libs/typeorm/questions.entity';
import { config } from 'dotenv';
import { QuestionsmathModule } from './questionsmath/questionsmath.module';
config();
console.log('------- Mathquest Api -------');
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST_DB,
      // port: process.env.PORT_DB,
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.DATABASE,
      entities: [QuestionLists],
      synchronize: true,
      // logging: false,
    }),
    ConfigModule.forRoot(),
    QuestionsmathModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
