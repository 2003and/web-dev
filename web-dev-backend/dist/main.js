"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.setGlobalPrefix('api');
        app.useGlobalPipes(new common_1.ValidationPipe());
        app.enableCors();
        const config = new swagger_1.DocumentBuilder()
            .setTitle('School X - OpenAPI 3.0')
            .setDescription(`[The source API definition (json)](http://${process.env.SERVER}:${process.env.PORT}/api-json)`)
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document, {
            swaggerOptions: {
                persistAuthorization: true,
                tagsSorter: 'alpha',
            },
        });
        const port = parseInt(process.env.PORT);
        console.log('port = ', process.env.PORT);
        const server = process.env.SERVER;
        yield app.listen(port, server);
        console.log(`Application is running on: ${yield app.getUrl()}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map