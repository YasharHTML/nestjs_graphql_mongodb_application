import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Model } from 'mongoose';
import { Post } from './entities/post.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Pagination } from 'src/common/Pagination.entity';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  create(createPostInput: CreatePostInput) {
    const { title, description } = createPostInput;
    return this.postModel.create({ title, description });
  }

  findAll(pagination: Pagination) {
    const { limit, page } = pagination;
    return this.postModel
      .find()
      .limit(limit)
      .skip(limit * page);
  }

  findOne(_id: string) {
    return this.postModel.findById(_id);
  }

  update(_id: string, updatePostInput: UpdatePostInput) {
    const { description, title } = updatePostInput;
    return this.postModel.findOneAndUpdate(
      { _id },
      { $set: { description, title } },
      { new: true },
    );
  }

  remove(_id: string) {
    return this.postModel.findByIdAndDelete({ _id });
  }
}
