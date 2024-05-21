/// <reference types="multer" />
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { BrandEntity } from 'src/brands/entities/brand.entity';
export declare class ProductService {
    private productRepository;
    private categoryRepository;
    private brandRepository;
    constructor(productRepository: Repository<ProductEntity>, categoryRepository: Repository<CategoryEntity>, brandRepository: Repository<BrandEntity>);
    create(dto: CreateProductDto, image: Express.Multer.File): Promise<ProductEntity>;
    findAll(): Promise<ProductEntity[]>;
    findOne(id: number): Promise<ProductEntity>;
    update(id: number, dto: UpdateProductDto, image: Express.Multer.File): Promise<ProductEntity>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
