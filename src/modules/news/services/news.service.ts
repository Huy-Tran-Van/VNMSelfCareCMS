import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseOptions } from "src/common/database/interfaces/database.interface";
import { NewsCreateDto } from "../dto/news.create.dto";
import { News } from "../interfaces/news.interface";
import { NewsRepository } from "../repositories/news.repository";
import { NewsDocument, NewsEntity } from "../schemas/news.schema";

@Injectable()

export class NewsService {

    constructor(private readonly newsRepository: NewsRepository) { }
    // Tìm tất cả tin tức
    async findAll(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions
    ): Promise<NewsDocument[]> {
        return this.newsRepository.findAll<NewsDocument>(
            find,
            options
        );
    }

    // Tạo một tin tức
    async create(
        data: NewsCreateDto,
        options?: IDatabaseCreateOptions
    ): Promise<NewsDocument> {
        const create: NewsEntity = {
            ...data,
        };

        return this.newsRepository.create<NewsEntity>(
            create,
            options
        );
    }

    async findOneById<T>(
        _id: string,
        options?: IDatabaseFindOneOptions
    ): Promise<T> {
        return this.newsRepository.findOneById<T>(_id, options);
    }

    // Sửa tin tức
    async update(
        _id: string,
        data: NewsCreateDto,
        options?: IDatabaseOptions
    ): Promise<NewsDocument> {
        return this.newsRepository.updateOneById<NewsCreateDto>(
            _id,
            data,
            options
        );
    }
}