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
exports.UpdateProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_product_dto_1 = require("./create-product.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateProductDto extends (0, mapped_types_1.PartialType)(create_product_dto_1.CreateProductDto) {
    constructor() {
        super(...arguments);
        this.name = 'Тренажер';
        this.description = 'Описание';
        this.amount = 10;
        this.price = 10000;
    }
}
exports.UpdateProductDto = UpdateProductDto;
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
], UpdateProductDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], UpdateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], UpdateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], UpdateProductDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], UpdateProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], UpdateProductDto.prototype, "category", void 0);
//# sourceMappingURL=update-product.dto.js.map