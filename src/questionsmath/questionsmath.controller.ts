import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { QuestionsmathService } from './questionsmath.service';
import { QuestionDto } from './dto/create-question.dto';

@Controller('api/')
export class QuestionsmathController {
  constructor(private readonly questService: QuestionsmathService) {}

  @Get('mathquestion/:id')
  async getQuest(@Param('id') id: number) {
    return await this.questService.getOne(id);
  }

  @Get('mathquestion/all')
  async findQuestions() {
    const list = await this.questService.getAll();
    return list;
  }

  @Post('mathquestion/create')
  async createQuestion(@Body() body: QuestionDto) {
    return this.questService.createQuest(body);
  }

  @Get('mathquestion/random')
  async getRandom() {
    return await this.questService.getRandom();
  }

  @Get('mathquestion/random/:category')
  async getRandCategory(@Param('category') category: string) {
    return await this.questService.getRandomCategory(category);
  }
}
