"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const order_item_entity_1 = require("./entities/order_item.entity");
const order_entity_1 = require("./entities/order.entity");
const product_entity_1 = require("../product/entities/product.entity");
const cart_service_1 = require("../cart/cart.service");
const cart_item_entity_1 = require("../cart/entities/cart_item.entity");
const user_entity_1 = require("../users/entities/user.entity");
const product_service_1 = require("../product/product.service");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const common_1 = require("@nestjs/common");
const category_entity_1 = require("../category/entities/category.entity");
const brand_entity_1 = require("../brands/entities/brand.entity");
const promo_entity_1 = require("../promo/entities/promo.entity");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                order_item_entity_1.OrderItemEntity,
                product_entity_1.ProductEntity,
                cart_item_entity_1.CartItemEntity,
                user_entity_1.UserEntity,
                category_entity_1.CategoryEntity,
                brand_entity_1.BrandEntity,
                promo_entity_1.PromoEntity,
                order_entity_1.OrderEntity,
            ]),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService, cart_service_1.CartService, product_service_1.ProductService],
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map