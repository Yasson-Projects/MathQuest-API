import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  async getHello() {
    const start = Date.now();

    const duration = Date.now() - start;
    this.logger.log(`${duration}ms`);

    return {
      api: 'Mathquest-Api',
      ping: duration,
    };
  }
}
