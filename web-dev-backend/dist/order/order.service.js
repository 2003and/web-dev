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
exports.OrderService = void 0;
const order_entity_1 = require("./entities/order.entity");
const order_item_entity_1 = require("./entities/order_item.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const cart_service_1 = require("../cart/cart.service");
const user_entity_1 = require("../users/entities/user.entity");
const common_1 = require("@nestjs/common");
let OrderService = class OrderService {
    constructor(orderItemRepository, userRepository, orderRepository, cartService) {
        this.orderItemRepository = orderItemRepository;
        this.userRepository = userRepository;
        this.orderRepository = orderRepository;
        this.cartService = cartService;
    }
    order(user, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const cartItems = yield this.cartService.getItemsInCart(user.id);
            const subTotal = cartItems
                .map((cartItem) => cartItem.quantity * cartItem.item.price)
                .reduce((acc, next) => acc + next);
            const order = this.orderRepository.create();
            order.items = [];
            for (let i = 0; i <= cartItems.length; i++) {
                if (cartItems[i] && cartItems[i].item) {
                    const orderItem = this.orderItemRepository.create({
                        item: cartItems[i].item,
                        quantity: cartItems[i].quantity,
                    });
                    yield this.orderItemRepository.save(orderItem);
                    order.items.push(orderItem);
                }
            }
            order.address = address;
            order.totalPrice = subTotal;
            order.user = user;
            this.orderRepository.save(order);
            this.cartService.clearCart(user.id);
        });
    }
    getOrders(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userOrder = yield this.orderItemRepository
                .createQueryBuilder()
                .select('t.*')
                .from(order_item_entity_1.OrderItemEntity, 't')
                .where('t.userId = :userId', { userId: userId })
                .execute();
            return userOrder;
        });
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(order_item_entity_1.OrderItemEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(order_entity_1.OrderEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        cart_service_1.CartService])
], OrderService);
//# sourceMappingURL=order.service.js.map