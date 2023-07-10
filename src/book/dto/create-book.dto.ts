import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "../schemas/book.schema"
import { Author } from "src/author/schemas/author.schema";
import { ObjectId } from "mongoose";

export class CreateBookDto{

    @IsNotEmpty()
    @IsString()
    readonly id:string;

    @IsNotEmpty()
    @IsString()
    readonly title:string;
    @IsNotEmpty()
    @IsString()
    readonly description:string;
    @IsNotEmpty()
    @IsString()
    readonly author:Author;
    @IsNotEmpty()
    @IsNumber()
    readonly price:number;

    @IsNotEmpty()
    @IsEnum(Category,{message:'please enter correct category'})
    readonly category:Category;
}