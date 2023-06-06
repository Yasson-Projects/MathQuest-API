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
exports.QuestionsmathController = void 0;
const common_1 = require("@nestjs/common");
const questionsmath_service_1 = require("./questionsmath.service");
const create_question_dto_1 = require("./dto/create-question.dto");
const axios_1 = require("axios");
let QuestionsmathController = class QuestionsmathController {
    constructor(questService) {
        this.questService = questService;
    }
    async findAll() {
        return await this.questService.getAll();
    }
    async getRandom() {
        return await this.questService.getRandom();
    }
    async getRandCategory(category) {
        return await this.questService.getRandomCategory(category);
    }
    async getQuest(id) {
        return await this.questService.getOne(id);
    }
    async createQuestion(body) {
        const cl = await axios_1.default.get(process.env.GET_IP);
        const ipe = cl.data.ip;
        await this.questService.client_request(ipe);
        return this.questService.createQuest(body, ipe);
    }
};
__decorate([
    (0, common_1.Get)('mathquestion/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionsmathController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('mathquestion/random'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionsmathController.prototype, "getRandom", null);
__decorate([
    (0, common_1.Get)('mathquestion/random/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionsmathController.prototype, "getRandCategory", null);
__decorate([
    (0, common_1.Get)('mathquestion/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionsmathController.prototype, "getQuest", null);
__decorate([
    (0, common_1.Post)('mathquestion/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_question_dto_1.QuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionsmathController.prototype, "createQuestion", null);
QuestionsmathController = __decorate([
    (0, common_1.Controller)('api/'),
    __metadata("design:paramtypes", [questionsmath_service_1.QuestionsmathService])
], QuestionsmathController);
exports.QuestionsmathController = QuestionsmathController;
//# sourceMappingURL=questionsmath.controller.js.map