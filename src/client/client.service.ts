import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientRequest } from 'src/libs/typeorm/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientRequest)
    private clientRequests: Repository<ClientRequest>,
  ) {}

  async viewRequest(ip: string) {
    const data = await this.clientRequests.findOneBy({ client_address: ip });
    return {
      address: data.client_address,
      requests: data.request_max + '/100',
      max_type_requests: 'POST',
    };
  }

  async requests() {
    return {
      message:
        'Tu ip esta protegida y no se puede usar ningun uso malisioso segun las politicas de Yasson projects® esto es un sistema para limitar las peticiones post',
    };
  }
}
