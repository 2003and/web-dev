/// <reference types="multer" />
import { BrandService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { BrandEntity } from './entities/brand.entity';
import { DeleteResult } from 'typeorm';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    create(dto: CreateBrandDto, image: Express.Multer.File): Promise<BrandEntity>;
    findAll(): Promise<BrandEntity[]>;
    download(path: string, response: any): any;
    findOne(id: string): Promise<BrandEntity>;
    update(id: string, dto: UpdateBrandDto, image: Express.Multer.File): Promise<BrandEntity>;
    remove(id: string): Promise<DeleteResult>;
}
