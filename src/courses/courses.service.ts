import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CoursesService {
    constructor(private readonly prisma: PrismaService) {}
    getCourses(){
        return this.prisma.course.findMany({
            include: {
                students: true
            }
        })
    }
    createCourse(body: any){
        return this.prisma.course.create({
            data: body
        })
    }
}
