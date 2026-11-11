import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoursesService } from './courses.service.js';

@Controller('courses')
export class CoursesController {
    constructor(private readonly service: CoursesService) {}
    @Get()
    getCourses(){
        return this.service.getCourses();
    }
    @Post()
    createCourse(@Body() body: any) {
        return this.service.createCourse(body);
    }
}
