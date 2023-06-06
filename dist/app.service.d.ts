export declare class AppService {
    private readonly logger;
    getHello(): Promise<{
        api: string;
        ping: number;
    }>;
}
