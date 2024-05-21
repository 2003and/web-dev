/// <reference types="multer" />
import { CreateCategoryDto } from './create-category.dto';
declare const UpdateCategoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCategoryDto>>;
export declare class UpdateCategoryDto extends UpdateCategoryDto_base {
    image: Express.Multer.File;
    name: string;
    subcategory: string;
}
export {};
