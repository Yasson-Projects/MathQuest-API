import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  async getHello() {
    const start = await Date.now();

    const duration = (await Date.now()) - start;
    this.logger.log(`${duration}ms`);

    return {
      api: 'Mathquest-Api',
      ping: duration,
      docs: 'https://github.com/Yasson-Projects/MathQuest-API/blob/main/README.md',
    };
  }
}
