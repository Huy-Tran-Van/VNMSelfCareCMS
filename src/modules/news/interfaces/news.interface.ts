import { PermissionDocument } from "src/modules/permission/schemas/permission.schema";
import { NewsDocument } from "../schemas/news.schema";

export interface INewsDocument extends Omit<NewsDocument, 'permissions'> {
    permissions: PermissionDocument[];
}

export interface News {
    title: string,
    desc: string,
    content: string,
    slug: string
}
