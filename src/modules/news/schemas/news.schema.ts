import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({ timestamps: true, versionKey: false })
export class NewsEntity {
        @Prop({ required: true })
        title: string;

        @Prop({ required: true })
        desc: string;

        @Prop({ required: true })
        content: string;

        @Prop({ required: true })
        slug: string;
}

export const NewDatabaseName = 'news';
export const NewsSchema = SchemaFactory.createForClass(NewsEntity)
export type NewsDocument = NewsEntity & Document;

