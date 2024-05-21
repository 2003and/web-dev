/// <reference types="multer" />
import { DeleteResult, Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsEntity } from './entities/news.entity';
export declare class NewsService {
    private repository;
    constructor(repository: Repository<NewsEntity>);
    create(image: Express.Multer.File, dto: CreateNewsDto): Promise<NewsEntity>;
    findAll(): Promise<NewsEntity[]>;
    findOne(id: number): Promise<NewsEntity>;
    update(id: number, dto: UpdateNewsDto): Promise<NewsEntity>;
    delete(id: number): Promise<DeleteResult>;
}
