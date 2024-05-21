import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartItemEntity } from './entities/cart_item.entity';
import { Repository } from 'typeorm';
import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class CartService {
    private cartItemRepository;
    private productRepository;
    private userRepository;
    getItemsInCart(userId: number): Promise<CartItemEntity[]>;
    constructor(cartItemRepository: Repository<CartItemEntity>, productRepository: Repository<ProductEntity>, userRepository: Repository<UserEntity>);
    create(dto: CreateCartDto, userId: number): Promise<CartItemEntity>;
    update(dto: UpdateCartDto, userId: number): Promise<any>;
    findAll(): Promise<CartItemEntity[]>;
    get(userId: number): Promise<any>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    clearCart(userId: number): Promise<void>;
}
