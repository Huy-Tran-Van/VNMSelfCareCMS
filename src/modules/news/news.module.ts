import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DATABASE_CONNECTION_NAME } from "src/common/database/constants/database.constant";
import { NewsController } from "./controllers/news.controller";
import { NewsRepository } from "./repositories/news.repository";
import { NewDatabaseName, NewsEntity, NewsSchema } from "./schemas/news.schema";
import { NewsService } from "./services/news.service";

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: NewsEntity.name,
                    schema: NewsSchema,
                    collection: NewDatabaseName,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
    controllers: [NewsController],
    providers: [NewsService, NewsRepository],
    exports: [NewsService, NewsRepository],
   
})
export class NewsModule {}