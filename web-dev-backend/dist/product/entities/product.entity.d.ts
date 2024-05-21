import { CategoryEntity } from 'src/category/entities/category.entity';
import { BrandEntity } from 'src/brands/entities/brand.entity';
export declare class ProductEntity {
    id: number;
    image: string;
    name: string;
    description: string;
    amount: number;
    price: number;
    category: CategoryEntity;
    brand: BrandEntity;
}
