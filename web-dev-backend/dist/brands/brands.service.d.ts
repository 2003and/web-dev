/// <reference types="multer" />
import { DeleteResult, Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { BrandEntity } from './entities/brand.entity';
export declare class BrandService {
    private repository;
    constructor(repository: Repository<BrandEntity>);
    create(dto: CreateBrandDto, image: Express.Multer.File): Promise<BrandEntity>;
    findAll(): Promise<BrandEntity[]>;
    findOne(id: number): Promise<BrandEntity>;
    update(id: number, dto: UpdateBrandDto, image: Express.Multer.File): Promise<BrandEntity>;
    delete(id: number): Promise<DeleteResult>;
}
