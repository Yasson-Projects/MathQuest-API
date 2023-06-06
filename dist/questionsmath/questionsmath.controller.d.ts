import { QuestionsmathService } from './questionsmath.service';
import { QuestionDto } from './dto/create-question.dto';
export declare class QuestionsmathController {
    private readonly questService;
    constructor(questService: QuestionsmathService);
    findAll(): Promise<import("../libs/typeorm/questions.entity").QuestionLists[]>;
    getRandom(): Promise<import("../libs/typeorm/questions.entity").QuestionLists>;
    getRandCategory(category: string): Promise<import("../libs/typeorm/questions.entity").QuestionLists>;
    getQuest(id: number): Promise<import("../libs/typeorm/questions.entity").QuestionLists>;
    createQuestion(body: QuestionDto): Promise<import("../libs/typeorm/questions.entity").QuestionLists | {
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
}
