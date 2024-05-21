import { Module } from '@nestjs/common';
import { HobbyService } from './hobby.service';
import { HobbyResolver } from './hobby.resolver';

@Module({
  providers: [HobbyResolver, HobbyService],
})
export class HobbyModule {}
