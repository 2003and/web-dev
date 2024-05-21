/// <reference types="multer" />
import { CreateProductDto } from './create-product.dto';
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    image: Express.Multer.File;
    name: string;
    description: string;
    amount: number;
    price: number;
    category: any;
}
export {};
