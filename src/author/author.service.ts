import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './schemas/author.schema';
import * as mongoose from 'mongoose';


@Injectable()
export class AuthorService {
    constructor(
        @InjectModel(Author.name)
        private authorModel:mongoose.Model<Author>
        ){}

        async findAll(): Promise<Author[]>{
            const authors= await this.authorModel.find();
            return authors;
        }

        async create(author:Author): Promise<Author>{
            const res=await this.authorModel.create(author);
            return res
        }

        async findById(id:string): Promise<Author>{
            const isValidId=mongoose.isValidObjectId(id)
            if(!isValidId){
                throw new BadRequestException('Please enter correct id');
            }
            const author=await this.authorModel.findById(id);
            if(!author){
                throw new NotFoundException('Book Not Found');
            }
            return author;
        }

        async updateById(id:string,author:Author): Promise<Author>{
            return await this.authorModel.findByIdAndUpdate(id,author,{
                new:true,
                runValidators:true,
            });
        }

        async deleteById(id:string): Promise<Author>{
            return await this.authorModel.findByIdAndDelete(id);
        }
}
