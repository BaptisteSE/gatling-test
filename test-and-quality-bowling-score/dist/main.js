"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const axios_1 = require("axios");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    const baseUrl = 'http://localhost:3000';
    const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    try {
        let response = await axios_1.default.post(`${baseUrl}/bowling-score`, frames);
        console.log('Bowling Score:', response.data);
        response = await axios_1.default.post(`${baseUrl}/bowling-score/with-spare`, frames);
        console.log('Bowling Score with Spare:', response.data);
        response = await axios_1.default.post(`${baseUrl}/bowling-score/with-strike`, frames);
        console.log('Bowling Score with Strike:', response.data);
        response = await axios_1.default.post(`${baseUrl}/bowling-score/with-bonus`, frames);
        console.log('Bowling Score with Bonus:', response.data);
    }
    catch (error) {
        console.error('Error making requests:', error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map