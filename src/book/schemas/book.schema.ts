import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { ObjectId } from "mongoose";
import { Author } from "src/author/schemas/author.schema";

export enum Category{
    ADVENTURE='Adventure',
    CLASSICS='Classics',
    CRIME='Crime',
    FANTASY='Fantasy',
}

@Schema({
    timestamps:true
})
export class Book{

    @Transform(({value})=>value.toString())
    id:ObjectId;
    @Prop()
    title:string;

    @Prop()
    description:string;

    @Prop()
    price:number;
    
    @Prop()
    category : Category;

    
    @Prop
    ({ type: Author })
    authorId: Author;
}

export const BookSchema=SchemaFactory.createForClass(Book)


