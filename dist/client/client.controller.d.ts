import { ClientService } from './client.service';
export declare class ClientController {
    private readonly clientQuest;
    constructor(clientQuest: ClientService);
    getRequest(): Promise<{
        address: string;
        requests: string;
        max_type_requests: string;
    }>;
    requets(): Promise<{
        message: string;
    }>;
}
