import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HobbyService } from './hobby.service';
import { CreateHobbyInput } from './dto/create-hobby.input';
import { UpdateHobbyInput } from './dto/update-hobby.input';

@Resolver('Hobby')
export class HobbyResolver {
  constructor(private readonly hobbyService: HobbyService) {}

  @Mutation('createHobby')
  create(@Args('createHobbyInput') createHobbyInput: CreateHobbyInput) {
    return this.hobbyService.create(createHobbyInput);
  }

  @Query('hobby')
  findAll() {
    return this.hobbyService.findAll();
  }

  @Query('hobby')
  findOne(@Args('id') id: number) {
    return this.hobbyService.findOne(id);
  }

  @Mutation('updateHobby')
  update(@Args('updateHobbyInput') updateHobbyInput: UpdateHobbyInput) {
    return this.hobbyService.update(updateHobbyInput.id, updateHobbyInput);
  }

  @Mutation('removeHobby')
  remove(@Args('id') id: number) {
    return this.hobbyService.remove(id);
  }
}
