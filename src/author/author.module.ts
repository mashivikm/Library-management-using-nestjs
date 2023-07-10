import { Module } from '@nestjs/common';
import { AuthorsController } from './author.controller';
import { AuthorService } from './author.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './schemas/author.schema';

@Module({
  imports :[MongooseModule.forFeature([{name:'Author',schema:AuthorSchema}])],
  controllers: [AuthorsController],
  providers: [AuthorService]
})
export class AuthorModule {}
