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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const create_cart_dto_1 = require("./dto/create-cart.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const update_cart_dto_1 = require("./dto/update-cart.dto");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    create(dto, req) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("**", req.id);
            return this.cartService.create(dto, req.id);
        });
    }
    get(req) {
        console.log(req);
        return this.cartService.getItemsInCart(req.id);
    }
    patch(dto, req) {
        return this.cartService.update(dto, req.id);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cart_dto_1.CreateCartDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "get", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_cart_dto_1.UpdateCartDto, Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "patch", null);
exports.CartController = CartController = __decorate([
    (0, swagger_1.ApiTags)('cart'),
    (0, common_1.Controller)('cart'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map