import { faker } from '@faker-js/faker';

export const NewsDocQueryList = [
    {
        name: 'isActive',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: 'true,false',
        description: "boolean value with ',' delimiter",
    },
];

export const NewsDocParamsGet = [
    {
        name: 'id',
        allowEmptyValue: false,
        required: true,
        type: 'string',
        example: faker.database.mongodbObjectId(),
    },
];
