import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
    constructor(private bookService:BookService){}
    
    @Get()
    async getAllBooks(): Promise<Book[]>{
        return this.bookService.findAll();
    }

    @Post()
    async createBook(@Body()
     book:Book):Promise<Book>{
        return this.bookService.create(book);
    }

    @Get(':id')
    async getBookById(
        @Param('id')
        id:string
    ): Promise<Book>{
        return this.bookService.findById(id);
    }

    @Put(':id')
    async updateBook(
        @Param('id')
        id:string,
        @Body()
        
     book:Book):Promise<Book>{
        if (!Book) {
            throw new NotFoundException('Book not found');
          }
        return this.bookService.updateById(id,book);
    }

    @Delete(':id')
    async deleteBook(
        @Param('id')
        id:string
    ): Promise<Book>{
        if (!Book) {
            throw new NotFoundException('Book not found');
          }
        return this.bookService.deleteById(id);
    } 
}
