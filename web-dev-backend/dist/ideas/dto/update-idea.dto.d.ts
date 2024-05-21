/// <reference types="multer" />
import { CreateIdeaDto } from './create-idea.dto';
declare const UpdateIdeaDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateIdeaDto>>;
export declare class UpdateIdeaDto extends UpdateIdeaDto_base {
    image: Express.Multer.File;
    title: string;
    text: string;
}
export {};
