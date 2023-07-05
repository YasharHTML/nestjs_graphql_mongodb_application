import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Pagination } from 'src/common/Pagination.entity';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll(@Args('pagination') pagination: Pagination) {
    return this.postService.findAll(pagination);
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('_id') _id: string) {
    return this.postService.findOne(_id);
  }

  @Mutation(() => Post)
  updatePost(
    @Args('_id') _id: string,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return this.postService.update(_id, updatePostInput);
  }

  @Mutation(() => Post)
  removePost(@Args('_id') _id: string) {
    return this.postService.remove(_id);
  }
}
