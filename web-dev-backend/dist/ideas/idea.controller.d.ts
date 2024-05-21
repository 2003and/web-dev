/// <reference types="multer" />
import { IdeaService } from './idea.service';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';
import { IdeaEntity } from './entities/idea.entity';
import { DeleteResult } from 'typeorm';
export declare class IdeaController {
    private readonly ideaService;
    constructor(ideaService: IdeaService);
    create(dto: CreateIdeaDto, image: Express.Multer.File): Promise<IdeaEntity>;
    findAll(): Promise<IdeaEntity[]>;
    download(path: string, response: any): any;
    findOne(id: string): Promise<IdeaEntity>;
    update(id: string, dto: UpdateIdeaDto, image: Express.Multer.File): Promise<IdeaEntity>;
    remove(id: string): Promise<DeleteResult>;
}
