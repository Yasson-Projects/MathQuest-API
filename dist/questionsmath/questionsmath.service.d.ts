import { QuestionLists } from 'src/libs/typeorm/questions.entity';
import { Repository } from 'typeorm';
import { QuestionDto } from './dto/create-question.dto';
import { ClientRequest } from 'src/libs/typeorm/client.entity';
export declare class QuestionsmathService {
    private questRepository;
    private questRequest;
    constructor(questRepository: Repository<QuestionLists>, questRequest: Repository<ClientRequest>);
    createQuest(quest: QuestionDto, ip: string): Promise<QuestionLists | {
        Requests_reached_post: number;
        manager_api: string;
        discord: string;
        error?: undefined;
    } | {
        error: string;
        Requests_reached_post?: undefined;
        manager_api?: undefined;
        discord?: undefined;
    }>;
    getAll(): Promise<QuestionLists[]>;
    getRandom(): Promise<QuestionLists>;
    getRandomCategory(category: string): Promise<QuestionLists>;
    getOne(id: number): Promise<QuestionLists>;
    client_request(ip: string): Promise<ClientRequest | import("typeorm").UpdateResult | {
        api: boolean;
    }>;
}
