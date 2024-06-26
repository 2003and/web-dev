/// <reference types="multer" />
import { CreateNewsDto } from './create-news.dto';
declare const UpdateNewsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateNewsDto>>;
export declare class UpdateNewsDto extends UpdateNewsDto_base {
    title: string;
    description: string;
    image: Express.Multer.File;
}
export {};
