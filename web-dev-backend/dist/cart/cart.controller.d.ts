import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(dto: CreateCartDto, req: any): Promise<import("./entities/cart_item.entity").CartItemEntity>;
    get(req: any): Promise<import("./entities/cart_item.entity").CartItemEntity[]>;
    patch(dto: UpdateCartDto, req: any): Promise<any>;
}
