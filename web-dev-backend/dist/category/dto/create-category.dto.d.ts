/// <reference types="multer" />
export declare class CreateCategoryDto {
    image: Express.Multer.File;
    name: string;
    subcategory: string;
}
