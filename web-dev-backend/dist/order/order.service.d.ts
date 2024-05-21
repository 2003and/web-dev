import { OrderEntity } from './entities/order.entity';
import { OrderItemEntity } from './entities/order_item.entity';
import { Repository } from 'typeorm';
import { CartService } from 'src/cart/cart.service';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class OrderService {
    private orderItemRepository;
    private userRepository;
    private orderRepository;
    private cartService;
    constructor(orderItemRepository: Repository<OrderItemEntity>, userRepository: Repository<UserEntity>, orderRepository: Repository<OrderEntity>, cartService: CartService);
    order(user: UserEntity, address: string): Promise<any>;
    getOrders(userId: number): Promise<OrderItemEntity[]>;
}
