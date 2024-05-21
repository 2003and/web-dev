/// <reference types="multer" />
import { CreatePromoDto } from './create-promo.dto';
declare const UpdatePromoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePromoDto>>;
export declare class UpdatePromoDto extends UpdatePromoDto_base {
    image: Express.Multer.File;
    title: string;
    text: string;
    rating: number;
    price: number;
}
export {};
