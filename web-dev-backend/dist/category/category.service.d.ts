/// <reference types="multer" />
import { DeleteResult, Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
export declare class CategoryService {
    private repository;
    constructor(repository: Repository<CategoryEntity>);
    create(dto: CreateCategoryDto, image: Express.Multer.File): Promise<CategoryEntity>;
    findAll(): Promise<CategoryEntity[]>;
    findOne(id: number): Promise<CategoryEntity>;
    update(id: number, dto: UpdateCategoryDto, image: Express.Multer.File): Promise<CategoryEntity>;
    delete(id: number): Promise<DeleteResult>;
}
