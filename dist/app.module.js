"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const questions_entity_1 = require("./libs/typeorm/questions.entity");
const dotenv_1 = require("dotenv");
const questionsmath_module_1 = require("./questionsmath/questionsmath.module");
const client_entity_1 = require("./libs/typeorm/client.entity");
const url_1 = require("url");
(0, dotenv_1.config)();
console.log('------- Mathquest Api -------');
const dbUrl = new url_1.URL(process.env.DATABASE_URL);
const routingId = dbUrl.searchParams.get('options');
dbUrl.searchParams.delete('options');
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'cockroachdb',
                url: dbUrl.toString(),
                entities: [questions_entity_1.QuestionLists, client_entity_1.ClientRequest],
                synchronize: true,
                ssl: true,
                extra: {
                    options: routingId,
                },
            }),
            config_1.ConfigModule.forRoot(),
            questionsmath_module_1.QuestionsmathModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map