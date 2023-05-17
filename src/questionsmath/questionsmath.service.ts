import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionLists } from 'src/libs/typeorm/questions.entity';
import { Repository } from 'typeorm';
import { QuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionsmathService {
  constructor(
    @InjectRepository(QuestionLists)
    private questRepository: Repository<QuestionLists>,
  ) {}
  async createQuest(quest: QuestionDto) {
    const newDate = this.questRepository.create(quest);
    const isData = this.questRepository.findOneBy({ question: quest.question });
    if (isData)
      return {
        error: 'This question already exists!',
      };
    return this.questRepository.save(newDate);
  }

  async getAll() {
    const data = await this.questRepository.find();
    return data;
  }

  async getRandom() {
    const data = await this.questRepository.find();
    const randomQuest = Math.floor(Math.random() * data.length);
    return data[randomQuest];
  }

  async getRandomCategory(category: string) {
    const data = await this.questRepository.find({
      where: { category: category },
    });
    const randomQuest = Math.floor(Math.random() * data.length);
    return data[randomQuest];
  }

  async getOne(id: number) {
    const data = await this.questRepository.findOneBy({ id });
    return data;
  }
}
