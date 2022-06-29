import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
	constructor(private readonly itemService: ItemsService){}

	@Get()
	get(){
		return this.itemService.get();
	}

	@Get(':name')
	findOne(@Param('name') name: string){
		return this.itemService.findOne(name);
	}

	@Post()
	create(@Body() createItem: CreateItemDto) {
		return this.itemService.create(createItem);
	}
}
