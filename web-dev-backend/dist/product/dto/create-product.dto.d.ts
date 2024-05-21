/// <reference types="multer" />
export declare class CreateProductDto {
    image: Express.Multer.File;
    name: string;
    description: string;
    amount: number;
    price: number;
    categoryId: number;
    brandId: number;
}
