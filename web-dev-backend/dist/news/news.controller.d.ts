/// <reference types="multer" />
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    create(dto: CreateNewsDto, image: Express.Multer.File): Promise<import("./entities/news.entity").NewsEntity>;
    findAll(): Promise<import("./entities/news.entity").NewsEntity[]>;
    findOne(id: string): Promise<import("./entities/news.entity").NewsEntity>;
    update(id: string, dto: UpdateNewsDto): Promise<import("./entities/news.entity").NewsEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
