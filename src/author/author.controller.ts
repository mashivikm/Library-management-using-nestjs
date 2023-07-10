import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './schemas/author.schema';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('authors')
export class AuthorsController {
    constructor(private authorService:AuthorService){}
    
    @Get()
    async getAllAuthors(): Promise<Author[]>{
        return this.authorService.findAll();
    }

    @Post()
    async createBook(@Body()
     author:CreateAuthorDto):Promise<Author>{
        return this.authorService.create(author);
    }

    @Get(':id')
    async getAuthorById(
        @Param('id')
        id:string
    ): Promise<Author>{
        return this.authorService.findById(id);
    }

    @Put(':id')
    async updateAuthor(
        @Param('id')
        id:string,
        @Body()
     author:UpdateAuthorDto):Promise<Author>{
        return this.authorService.updateById(id,author);
    }

    @Delete(':id')
    async deleteBook(
        @Param('id')
        id:string
    ): Promise<Author>{
        return this.authorService.deleteById(id);
    } 
}
