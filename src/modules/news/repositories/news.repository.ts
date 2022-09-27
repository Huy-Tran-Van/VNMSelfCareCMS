import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoRepositoryAbstract } from 'src/common/database/abstracts/database.mongo-repository.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { IDatabaseRepositoryAbstract } from 'src/common/database/interfaces/database.repository.interface';
import { NewsDocument, NewsEntity } from '../schemas/news.schema';

@Injectable()
export class NewsRepository
    extends DatabaseMongoRepositoryAbstract<NewsDocument>
    implements IDatabaseRepositoryAbstract<NewsDocument>
{
    constructor(
        @DatabaseEntity(NewsEntity.name)
        private readonly newsModel: Model<NewsDocument>
    ) {
        super(newsModel);
    }
}
