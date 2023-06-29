import { Controller, Get } from '@nestjs/common';
import { ClientService } from './client.service';
import axios from 'axios';

@Controller('api/')
export class ClientController {
  constructor(private readonly clientQuest: ClientService) {}

  @Get('client/requests/me')
  async getRequest() {
    const getAddress = await axios.get(process.env.GET_IP);
    const { ip } = getAddress.data;
    return await this.clientQuest.viewRequest(ip);
  }

  @Get('client/requests')
  async requets() {
    return await this.clientQuest.requests();
  }
}
