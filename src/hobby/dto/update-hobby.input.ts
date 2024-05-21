import { CreateHobbyInput } from './create-hobby.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHobbyInput extends PartialType(CreateHobbyInput) {
  id: number;
}
