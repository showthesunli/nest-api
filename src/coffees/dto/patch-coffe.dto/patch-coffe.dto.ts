import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeDto } from '../create-coffe.dto/create-coffe.dto';
export class PatchCoffeDto extends PartialType(CreateCoffeDto) {}
