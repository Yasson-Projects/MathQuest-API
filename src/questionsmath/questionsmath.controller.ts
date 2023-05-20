import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { QuestionsmathService } from './questionsmath.service';
import { QuestionDto } from './dto/create-question.dto';
import axios from 'axios';

@Controller('api/')
export class QuestionsmathController {
  constructor(private readonly questService: QuestionsmathService) {}

  @Get('mathquestion/all')
  async findAll() {
    return await this.questService.getAll();
  }

  @Get('mathquestion/random')
  async getRandom() {
    return await this.questService.getRandom();
  }

  @Get('mathquestion/random/:category')
  async getRandCategory(@Param('category') category: string) {
    return await this.questService.getRandomCategory(category);
  }

  @Get('mathquestion/:id')
  async getQuest(@Param('id') id: number) {
    return await this.questService.getOne(id);
  }

  @Post('mathquestion/create')
  async createQuestion(@Body() body: QuestionDto) {
    const cl: any = await axios.get(process.env.GET_IP);
    const ipe = cl.data.ip;
    await this.questService.client_request(ipe);
    return this.questService.createQuest(body, ipe);
  }
}
