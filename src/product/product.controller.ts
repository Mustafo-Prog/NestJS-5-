import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { create } from './dto/create.dto.js';

@Controller('product')
export class ProductController {
    constructor(private readonly service: ProductService) {}
    @Get()
    getAll(){
        return this.service.getAll();
    }
    @Get(':id')
    getOne(@Param('id') id: string){
        return this.service.getOne(+id);   
    }
    @Post()
    create(@Body() body: create) {
        return this.service.create(body);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() body: create){
        return this.service.update(+id, body);
    }
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.service.delete(+id);
    }
}