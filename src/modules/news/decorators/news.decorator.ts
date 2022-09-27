import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { NewsDocument } from '../schemas/news.schema';

export const GetNews = createParamDecorator(
    (data: string, ctx: ExecutionContext): NewsDocument => {
        const { __news } = ctx.switchToHttp().getRequest();
        return __news;
    }
);
