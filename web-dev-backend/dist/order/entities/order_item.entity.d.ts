import { ProductEntity } from 'src/product/entities/product.entity';
import { OrderEntity } from './order.entity';
export declare class OrderItemEntity {
    id: number;
    item: ProductEntity;
    quantity: number;
    pending: boolean;
    order: OrderEntity;
}
