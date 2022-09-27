import { Body, Controller, Get, Post, VERSION_NEUTRAL, InternalServerErrorException, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthApiKey } from 'src/common/auth/decorators/auth.api-key.decorator';
import { AuthJwtGuard } from 'src/common/auth/decorators/auth.jwt.decorator';
import { ENUM_ERROR_STATUS_CODE_ERROR } from 'src/common/error/constants/error.status-code.constant';
import { ENUM_LOGGER_ACTION } from 'src/common/logger/constants/logger.enum.constant';
import { Logger } from 'src/common/logger/decorators/logger.decorator';
import { RequestParamGuard } from 'src/common/request/decorators/request.decorator';
import { Response } from 'src/common/response/decorators/response.decorator';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { ResponseIdSerialization } from 'src/common/response/serializations/response.id.serialization';
import { NewsDocParamsGet } from 'src/modules/news/constants/news.constant';
import { GetNews } from 'src/modules/news/decorators/news.decorator';
import { NewsUpdateGuard } from '../decorators/new.admin.decorator';
import { NewsCreateDto } from '../dto/news.create.dto';
import { NewsRequestDto } from '../dto/news.request.dto';
import { NewsUpdateDto } from '../dto/news.update.dto';
import { INewsDocument } from '../interfaces/news.interface';
import { NewsDocument } from '../schemas/news.schema';
import { NewsService } from '../services/news.service';


@ApiTags('news')

@Controller({
  version: VERSION_NEUTRAL,
  path: '/',
})
export class NewsController {

  constructor(
    private readonly news: NewsService,
    private readonly NewsService: NewsService
  ) { }

  // @Response('app.news', { classSerialization: AppHelloSerialization })
  // @RequestExcludeTimestamp()

  @Logger(ENUM_LOGGER_ACTION.TEST, { tags: ['test'] })
  @AuthJwtGuard()
  @Get("/news")
  getAll() {
    return this.news.findAll();
  }

  @AuthJwtGuard()
  @Post('/news')
  async create(
    @Body() body: NewsCreateDto
  ): Promise<IResponse> {
    try {
      await this.NewsService.create(body);
    } catch (err: any) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        error: err.message,
      });
    }

    return {
      body
    };
  }

  // Sửa bài viết
  @Response('news.update', {
    classSerialization: ResponseIdSerialization,
    doc: {
      params: NewsDocParamsGet,
    },
  })
  @NewsUpdateGuard()
  @RequestParamGuard(NewsRequestDto)
  @AuthApiKey()
  @Put('/news/update/:news')
  async update(
    @GetNews() news: NewsDocument,
    @Body() body: NewsUpdateDto
  ): Promise<IResponse> {

    try {
      await this.news.update(news._id, body);

    } catch (err: any) {
      throw new InternalServerErrorException({
        statusCode: ENUM_ERROR_STATUS_CODE_ERROR.ERROR_UNKNOWN,
        message: 'http.serverError.internalServerError',
        error: err.message,
      });
    }

    return {
      _id: news._id,
    };
  }

  // 
  @Response('news.get', {
    classSerialization: ResponseIdSerialization,
    doc: {
      params: NewsDocParamsGet,
    },
  })
  @NewsUpdateGuard()
  @RequestParamGuard(NewsRequestDto)
  // @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.ROLE_READ)
  @AuthApiKey()
  @Get('/news/:news')
  async get(@GetNews() news: INewsDocument): Promise<IResponse> {
    return news;
  }
}