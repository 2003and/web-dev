import { UserEntity } from 'src/users/entities/user.entity';
import { OrderItemEntity } from './order_item.entity';
export declare class OrderEntity {
    id: number;
    user: UserEntity;
    address: string;
    totalPrice: number;
    items: OrderItemEntity[];
}
