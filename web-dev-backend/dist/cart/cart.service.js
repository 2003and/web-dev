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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const cart_item_entity_1 = require("./entities/cart_item.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const product_entity_1 = require("../product/entities/product.entity");
const user_entity_1 = require("../users/entities/user.entity");
let CartService = class CartService {
    getItemsInCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(userId);
            const userCart = yield this.cartItemRepository.findBy({
                user: { id: userId },
            });
            console.log("CartService>", userCart);
            return userCart;
        });
    }
    constructor(cartItemRepository, productRepository, userRepository) {
        this.cartItemRepository = cartItemRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }
    create(dto, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cartItem = new cart_item_entity_1.CartItemEntity();
            cartItem.user = yield this.userRepository.findOneBy({ id: userId });
            console.log(cartItem.user.id, userId);
            cartItem.item = yield this.productRepository.findOneBy({
                id: dto.itemId,
            });
            cartItem.quantity = dto.quantity;
            return yield this.cartItemRepository.save(cartItem);
        });
    }
    update(dto, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userCart = yield this.cartItemRepository
                .createQueryBuilder()
                .select('t.*')
                .from(cart_item_entity_1.CartItemEntity, 't')
                .where('t.userId = :userId and t.itemId = :itemId', {
                userId: userId,
                itemId: dto.itemId,
            })
                .execute();
            if (userCart.length === 0) {
                throw new common_1.BadRequestException(`Записи с id=${dto.itemId} не найдено`);
            }
            console.log('update');
            console.log(userCart);
            userCart[0].quantity = userCart[0].quantity + dto.quantity;
            const updatedCart = yield this.cartItemRepository.save(userCart);
            console.log('1d');
            return updatedCart;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cartItemRepository.find();
        });
    }
    get(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cartItemRepository
                .createQueryBuilder()
                .select()
                .from(cart_item_entity_1.CartItemEntity, 't')
                .where('t.userId = :userId', { userId: userId })
                .execute();
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cartItemRepository.delete(id);
        });
    }
    clearCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cartItemRepository
                .createQueryBuilder()
                .delete()
                .from(cart_item_entity_1.CartItemEntity)
                .where('userId = :userId', { userId: userId })
                .execute();
        });
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(cart_item_entity_1.CartItemEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(product_entity_1.ProductEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], CartService);
//# sourceMappingURL=cart.service.js.map