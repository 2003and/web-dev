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
exports.PromoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const fs = require("fs");
const promo_entity_1 = require("./entities/promo.entity");
let PromoService = class PromoService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto, image) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.save({
                image: image.filename,
                title: dto.title,
                text: dto.text,
                rating: dto.rating,
                price: dto.price,
            });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ id });
        });
    }
    update(id, dto, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const toUpdate = yield this.repository.findOneBy({ id });
            if (!toUpdate) {
                throw new common_1.BadRequestException(`Записи с id=${id} не найдено`);
            }
            if (dto.text) {
                toUpdate.text = dto.text;
            }
            if (dto.title) {
                toUpdate.title = dto.title;
            }
            if (dto.rating) {
                toUpdate.rating = dto.rating;
            }
            if (dto.price) {
                toUpdate.price = dto.price;
            }
            if (image) {
                if (toUpdate.image !== image.filename) {
                    fs.unlink(`db_images/promo/${toUpdate.image}`, (err) => {
                        if (err) {
                            console.error(err);
                        }
                    });
                }
                toUpdate.image = image.filename;
            }
            return this.repository.save(toUpdate);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.delete(id);
        });
    }
};
exports.PromoService = PromoService;
exports.PromoService = PromoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(promo_entity_1.PromoEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PromoService);
//# sourceMappingURL=promo.service.js.map