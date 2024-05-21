/// <reference types="multer" />
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { DeleteResult } from 'typeorm';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: CreateProductDto, image: Express.Multer.File): Promise<ProductEntity>;
    findAll(): Promise<ProductEntity[]>;
    download(path: string, response: any): any;
    findOne(id: string): Promise<ProductEntity>;
    update(id: string, dto: UpdateProductDto, image: Express.Multer.File): Promise<ProductEntity>;
    remove(id: string): Promise<DeleteResult>;
}
