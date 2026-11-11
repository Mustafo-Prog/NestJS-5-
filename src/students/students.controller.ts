import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentsService } from './students.service.js';

@Controller('students')
export class StudentsController {
    constructor(private readonly service: StudentsService){}
    @Get()
    getAll(){
        return this.service.getStudents;
    }
    @Post()
    create(@Body() body: any){
        return this.service.createStudent(body)
    }
    @Patch(':studentId/course/:courseId')
    addCourse(
        @Param('studentId') studentId: string,
        @Param('courseId') courseId: string
    ){
        return this.service.addCourse(+studentId, +courseId)
    }
    @Patch(':studentId/course-remove/:courseId')
    removeCourse(
        @Param('studentId') studentId: any,
        @Param('courseId') courseId: any
    ){
        return this.service.removeCourse(+studentId, +courseId);
    }
}
