"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsmathService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const questions_entity_1 = require("../libs/typeorm/questions.entity");
const typeorm_2 = require("typeorm");
const client_entity_1 = require("../libs/typeorm/client.entity");
const confs_1 = require("../libs/confs");
let QuestionsmathService = class QuestionsmathService {
    constructor(questRepository, questRequest) {
        this.questRepository = questRepository;
        this.questRequest = questRequest;
    }
    async createQuest(quest, ip) {
        const isData = await this.questRepository.findOneBy({
            question: quest.question,
        });
        const newDate = this.questRepository.create(quest);
        const dataClient = await this.questRequest.findOneBy({
            client_address: ip,
        });
        if (dataClient.request_max > confs_1.config.max_requests)
            return {
                Requests_reached_post: dataClient.request_max,
                manager_api: 'You reached the maximum number of post requests to create mathematical questions',
                discord: 'https://discord.gg/jDHbvhzPmQ',
            };
        if (isData)
            return {
                error: 'This question already exists!',
            };
        return this.questRepository.save(newDate);
    }
    async getAll() {
        return await this.questRepository.find();
    }
    async getRandom() {
        const data = await this.questRepository.find();
        const randomQuest = Math.floor(Math.random() * data.length);
        return data[randomQuest];
    }
    async getRandomCategory(category) {
        const data = await this.questRepository.find({
            where: { category: category },
        });
        const randomQuest = Math.floor(Math.random() * data.length);
        return data[randomQuest];
    }
    async getOne(id) {
        const data = await this.questRepository.findOneBy({ id });
        return data;
    }
    async client_request(ip) {
        const data = await this.questRequest.findOneBy({
            client_address: ip,
        });
        if (!data) {
            const newDAtes = await this.questRequest.create({
                client_address: ip,
                request_max: 1,
            });
            return this.questRequest.save(newDAtes);
        }
        if (data.request_max > confs_1.config.max_requests)
            return { api: false };
        return this.questRequest.update({ client_address: ip }, { request_max: data.request_max + 1 });
    }
};
QuestionsmathService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(questions_entity_1.QuestionLists)),
    __param(1, (0, typeorm_1.InjectRepository)(client_entity_1.ClientRequest)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], QuestionsmathService);
exports.QuestionsmathService = QuestionsmathService;
//# sourceMappingURL=questionsmath.service.js.map