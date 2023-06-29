import { ClientRequest } from 'src/libs/typeorm/client.entity';
import { Repository } from 'typeorm';
export declare class ClientService {
    private clientRequests;
    constructor(clientRequests: Repository<ClientRequest>);
    viewRequest(ip: string): Promise<{
        address: string;
        requests: string;
        max_type_requests: string;
    }>;
    requests(): Promise<{
        message: string;
    }>;
}
