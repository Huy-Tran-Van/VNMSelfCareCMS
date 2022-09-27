import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { INewsDocument } from '../interfaces/news.interface';
import { NewsService } from '../services/news.service';

@Injectable()
export class NewsPutToRequestGuard implements CanActivate {
    constructor(private readonly newsService: NewsService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const { params } = request;
        const { news } = params;

        const check: INewsDocument =
            await this.newsService.findOneById<INewsDocument>(news, {
                populate: true,
            });
        request.__news = check;

        return true;
    }
}
