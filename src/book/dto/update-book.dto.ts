import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Category } from "../schemas/book.schema"
import { Author } from "src/author/schemas/author.schema";
import { ObjectId } from "mongoose";

export class UpdateBookDto{

    @IsString()
    readonly id:string;
    @IsOptional()
    @IsString()
    readonly title:string;
    @IsOptional()
    @IsString()
    readonly description:string;
    @IsOptional()
    @IsString()
    readonly author:Author;
    @IsOptional()
    @IsNumber()
    readonly price:number;
    @IsOptional()
    @IsEnum(Category,{message:'please enter correct category'})
    readonly category:Category;
}