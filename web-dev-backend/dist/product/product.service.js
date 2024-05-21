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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("typeorm");
const fs = require("fs");
const category_entity_1 = require("../category/entities/category.entity");
const brand_entity_1 = require("../brands/entities/brand.entity");
let ProductService = class ProductService {
    constructor(productRepository, categoryRepository, brandRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.brandRepository = brandRepository;
    }
    create(dto, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield this.categoryRepository.findOne({
                where: { id: dto.categoryId },
            });
            const brand = yield this.brandRepository.findOne({
                where: { id: dto.brandId },
            });
            if (!category) {
                throw new common_1.BadRequestException(`Некорректная категория: id=${dto.categoryId}`);
            }
            if (!brand) {
                throw new common_1.BadRequestException(`Некоррктный бренд: id=${dto.brandId}`);
            }
            const product = new product_entity_1.ProductEntity();
            product.image = image.filename;
            product.name = dto.name;
            product.description = dto.description;
            product.amount = dto.amount;
            product.price = dto.price;
            product.category = category;
            product.brand = brand;
            const newProduct = yield this.productRepository.save(product);
            return newProduct;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productRepository.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productRepository.findOneBy({ id });
        });
    }
    update(id, dto, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const toUpdate = yield this.productRepository.findOneBy({ id });
            if (!toUpdate) {
                throw new common_1.BadRequestException(`Записи с id=${id} не найдено`);
            }
            if (dto.name) {
                toUpdate.name = dto.name;
            }
            if (dto.description) {
                toUpdate.description = dto.description;
            }
            if (dto.amount) {
                toUpdate.amount = dto.amount;
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
            return this.productRepository.save(toUpdate);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productRepository.delete(id);
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(brand_entity_1.BrandEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
//# sourceMappingURL=product.service.js.map