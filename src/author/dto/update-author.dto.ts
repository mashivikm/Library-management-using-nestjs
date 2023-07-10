import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateAuthorDto{
    @IsOptional()
    @IsString()
    readonly name: string;
    @IsOptional()
    @IsString()
    readonly id:string;
}