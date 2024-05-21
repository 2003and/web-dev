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
exports.UpdatePromoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_promo_dto_1 = require("./create-promo.dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class UpdatePromoDto extends (0, mapped_types_1.PartialType)(create_promo_dto_1.CreatePromoDto) {
    constructor() {
        super(...arguments);
        this.rating = 5;
        this.price = 10000;
    }
}
exports.UpdatePromoDto = UpdatePromoDto;
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
], UpdatePromoDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromoDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromoDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdatePromoDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdatePromoDto.prototype, "price", void 0);
//# sourceMappingURL=update-promo.dto.js.map