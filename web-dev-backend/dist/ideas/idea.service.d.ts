/// <reference types="multer" />
import { DeleteResult, Repository } from 'typeorm';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';
import { IdeaEntity } from './entities/idea.entity';
export declare class IdeaService {
    private repository;
    constructor(repository: Repository<IdeaEntity>);
    create(dto: CreateIdeaDto, image: Express.Multer.File): Promise<IdeaEntity>;
    findAll(): Promise<IdeaEntity[]>;
    findOne(id: number): Promise<IdeaEntity>;
    update(id: number, dto: UpdateIdeaDto, image: Express.Multer.File): Promise<IdeaEntity>;
    delete(id: number): Promise<DeleteResult>;
}
