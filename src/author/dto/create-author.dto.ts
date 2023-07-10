import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAuthorDto{

    @IsNotEmpty()
    @IsString()
    readonly name: string;
    @IsNotEmpty()
    @IsString()
    readonly id:string;
}