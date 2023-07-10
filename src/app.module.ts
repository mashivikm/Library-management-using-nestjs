import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book/schemas/book.schema';
import { Author, AuthorSchema } from './author/schemas/author.schema';
import { AuthorModule } from './author/author.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal:true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    BookModule,AuthorModule,
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: Author.name, schema: AuthorSchema },
    ]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
