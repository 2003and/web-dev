import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class CartItemEntity {
    id: number;
    quantity: number;
    item: ProductEntity;
    user: UserEntity;
}
