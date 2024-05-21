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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNewsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_news_dto_1 = require("./create-news.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateNewsDto extends (0, mapped_types_1.PartialType)(create_news_dto_1.CreateNewsDto) {
}
exports.UpdateNewsDto = UpdateNewsDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateNewsDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateNewsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'file',
        properties: {
            file: {
                type: 'string',
                format: 'binary',
            },
        },
    }),
    __metadata("design:type", Object)
], UpdateNewsDto.prototype, "image", void 0);
//# sourceMappingURL=update-news.dto.js.map