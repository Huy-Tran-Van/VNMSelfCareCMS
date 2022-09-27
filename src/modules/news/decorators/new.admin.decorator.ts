import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ROLE_ACTIVE_META_KEY } from 'src/modules/role/constants/role.constant';
import { NewsPutToRequestGuard } from '../guards/news.put-to-request.guard';


export function NewsUpdateGuard(): any {
    return applyDecorators(
        UseGuards(
            NewsPutToRequestGuard,
        ),
        SetMetadata(ROLE_ACTIVE_META_KEY, [true])
    );
}
