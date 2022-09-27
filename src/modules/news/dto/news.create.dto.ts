import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class NewsCreateDto {
    @ApiProperty({
        description: 'Tin tuc',
        example: faker.name.jobDescriptor(),
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @ApiProperty({
        description: 'desc',
        example: 'blabla description',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    readonly desc: string;

    @ApiProperty({
        description: 'Description of permission',
        example: 'blabla content',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    readonly content: string;

    @ApiProperty({
        description: 'slug of news',
        example: 'bla-bla-bla-slug',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    readonly slug: string;
}
