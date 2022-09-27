import { PickType } from '@nestjs/swagger';
import { NewsCreateDto } from './news.create.dto';

export class NewsUpdateDto extends PickType(NewsCreateDto, [
    'title',
    'desc',
    'content',
    'slug'
] as const) { }
