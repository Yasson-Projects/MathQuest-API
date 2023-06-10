import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    index(res: any): void;
    getHello(): Promise<{
        api: string;
        ping: number;
        docs: string;
    }>;
}
