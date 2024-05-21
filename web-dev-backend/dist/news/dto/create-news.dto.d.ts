/// <reference types="multer" />
export declare class CreateNewsDto {
    image: Express.Multer.File;
    title: string;
    description: string;
}
