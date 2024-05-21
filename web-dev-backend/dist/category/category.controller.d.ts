/// <reference types="multer" />
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(dto: CreateCategoryDto, image: Express.Multer.File): Promise<import("./entities/category.entity").CategoryEntity>;
    findAll(): Promise<import("./entities/category.entity").CategoryEntity[]>;
    findOne(id: string): Promise<import("./entities/category.entity").CategoryEntity>;
    update(id: string, updateCategoryDto: UpdateCategoryDto, image: Express.Multer.File): Promise<import("./entities/category.entity").CategoryEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
