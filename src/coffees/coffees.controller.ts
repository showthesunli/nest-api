import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeDto } from './dto/create-coffe.dto/create-coffe.dto';
import { PatchCoffeDto } from './dto/patch-coffe.dto/patch-coffe.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('id :>> ', id);
    console.log(typeof id);
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCoffeDto) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: PatchCoffeDto) {
    return this.coffeesService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coffeesService.remove(id);
  }
}
