import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffe } from './entities/coffees.entity';
import { CreateCoffeDto } from './dto/create-coffe.dto/create-coffe.dto';
import { PatchCoffeDto } from './dto/patch-coffe.dto/patch-coffe.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffe[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffe = this.coffees.find((item) => item.id === +id);
    if (coffe) {
      return coffe;
    } else {
      throw new NotFoundException(`Coffe #${id} not found`);
    }
  }
  update(id: number, updateCoffeeDto: PatchCoffeDto) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees[coffeeIndex] = {
        ...this.coffees[`coffeeIndex`],
        ...updateCoffeeDto,
      };
    } else {
      throw new NotFoundException(`Coffe #${id} not found`);
    }
    return updateCoffeeDto;
  }

  remove(id: number) {
    const coffeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeIndex >= 0) {
      this.coffees.splice(id, 1);
    } else {
      throw new NotFoundException(`Coffe #${id} not found`);
    }
  }

  create(createCoffeeDto: CreateCoffeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeDto);
    const newCoffe: Coffe = { id: this.coffees.length + 1, ...createCoffeeDto };
    this.coffees.push(newCoffe);
  }
}
