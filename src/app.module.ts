import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQlConfig } from './config/graphql.config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './resources/post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>(GraphQlConfig()),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    PostModule,
  ],
})
export class AppModule {}
