import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item';
import { Items } from './items';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) { }

  @Get()
  async findAll(): Promise<Items> {
    return this.itemsService.findAll();
  }

  @Get(":id")
  async findById(@Param('id') id: number): Promise<Item> {
    return this.itemsService.find(id);
  }

  @Post()
  async create(@Body('item') item: Item): Promise<void> {
    return this.itemsService.create(item);
  }

  @Put()
  async update(@Body('item') item: Item): Promise<void> {
    return this.itemsService.update(item);
  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<void> {
    return this.itemsService.delete(id)
  }
}
