import { Type } from 'class-transformer';
import { IsNotEmpty, IsMongoId } from 'class-validator';

export class NewsRequestDto {
    @IsNotEmpty()
    @IsMongoId()
    @Type(() => String)
    news: string;
}
