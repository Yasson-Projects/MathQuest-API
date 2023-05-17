import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  index(@Res() res: any) {
    res.status(404).redirect('/api');
  }

  @Get('api/')
  async getHello() {
    return this.appService.getHello();
  }
}
