import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionLists } from 'src/libs/typeorm/questions.entity';
import { Repository } from 'typeorm';
import { QuestionDto } from './dto/create-question.dto';
import { ClientRequest } from 'src/libs/typeorm/client.entity';
import { config } from 'src/libs/confs';

@Injectable()
export class QuestionsmathService {
  constructor(
    @InjectRepository(QuestionLists)
    private questRepository: Repository<QuestionLists>,
    @InjectRepository(ClientRequest)
    private questRequest: Repository<ClientRequest>,
  ) {}
  async createQuest(quest: QuestionDto, ip: string) {
    const isData = await this.questRepository.findOneBy({
      question: quest.question,
    });
    const newDate = this.questRepository.create(quest);
    const dataClient = await this.questRequest.findOneBy({
      client_address: ip,
    });
    if (dataClient.request_max > config.max_requests)
      return {
        Requests_reached_post: dataClient.request_max,
        manager_api:
          'You reached the maximum number of post requests to create mathematical questions',
        discord: 'https://discord.gg/jDHbvhzPmQ',
      };
    if (isData)
      return {
        error: 'This question already exists!',
      };
    return this.questRepository.save(newDate);
  }

  async getAll() {
    return await this.questRepository.find();
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

  async client_request(ip: string) {
    const data = await this.questRequest.findOneBy({
      client_address: ip,
    });
    if (!data) {
      const newDAtes = await this.questRequest.create({
        client_address: ip,
        request_max: 1,
      });
      return this.questRequest.save(newDAtes);
    }
    if (data.request_max > config.max_requests) return { api: false };
    return this.questRequest.update(
      { client_address: ip },
      { request_max: data.request_max + 1 },
    );
  }
}
