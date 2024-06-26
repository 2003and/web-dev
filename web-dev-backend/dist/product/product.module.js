"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const product_service_1 = require("./product.service");
const product_controller_1 = require("./product.controller");
const product_entity_1 = require("./entities/product.entity");
const category_module_1 = require("../category/category.module");
const category_entity_1 = require("../category/entities/category.entity");
const brands_module_1 = require("../brands/brands.module");
const brand_entity_1 = require("../brands/entities/brand.entity");
const promo_entity_1 = require("../promo/entities/promo.entity");
const promo_module_1 = require("../promo/promo.module");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            typeorm_1.TypeOrmModule.forFeature([
                product_entity_1.ProductEntity,
                category_entity_1.CategoryEntity,
                brand_entity_1.BrandEntity,
                promo_entity_1.PromoEntity,
            ]),
            category_module_1.CategoryModule,
            brands_module_1.BrandModule,
            promo_module_1.PromoModule,
        ],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map