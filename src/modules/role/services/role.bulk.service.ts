import { Injectable } from '@nestjs/common';
import { IDatabaseOptions } from 'src/common/database/interfaces/database.interface';
import { RoleCreateDto } from 'src/modules/role/dtos/role.create.dto';
import { IRoleBulkService } from 'src/modules/role/interfaces/role.bulk-service.interface';
import { RoleBulkRepository } from 'src/modules/role/repositories/role.bulk.repository';

@Injectable()
export class RoleBulkService implements IRoleBulkService {
    constructor(private readonly roleBulkRepository: RoleBulkRepository) {}

    async deleteMany(
        find: Record<string, any>,
        options?: IDatabaseOptions
    ): Promise<boolean> {
        return this.roleBulkRepository.deleteMany(find, options);
    }

    async createMany(
        data: RoleCreateDto[],
        options?: IDatabaseOptions
    ): Promise<boolean> {
        return this.roleBulkRepository.createMany<RoleCreateDto>(data, options);
    }
}
