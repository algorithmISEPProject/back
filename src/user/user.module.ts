import { Module } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UserResolver, UserService, PostsService],
})
export class UserModule {}
