import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';

@Injectable()
export class ItemsService {
	items: CreateItemDto[] = [];

	get() {
		return this.items;
	}

	findOne(name: string) {
		const item = this.items.find((item) => item.name === name);
		return item;
	}

	create(item: CreateItemDto) {
		this.items.push(item);
		return item;
	}
}