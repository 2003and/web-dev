/// <reference types="multer" />
export declare class CreatePromoDto {
    image: Express.Multer.File;
    title: string;
    text: string;
    rating: number;
    price: number;
}
