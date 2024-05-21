import { ProductEntity } from 'src/product/entities/product.entity';
export declare class PromoEntity {
    id: number;
    image: string;
    title: string;
    text: string;
    rating: number;
    price: number;
    product: ProductEntity;
}
