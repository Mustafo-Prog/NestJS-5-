import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { create } from './dto/create.dto.js';

@Injectable()
export class ProductService {
    constructor (private readonly prisma: PrismaService) {}
    async getAll(){
        return this.prisma.product.findMany();
    }
    async getOne(id: number){
        return this.prisma.product.findUnique({
            where: {id}
        })
    }
    async create(body: create) {
        await this.prisma.product.create({
            data: body
        })
        return {
            message: "You have successfully added a product!"
        }
    }
    async update(id: number, body: create){
        const product12 = await this.prisma.product.findUnique({
            where: {id}
        })
        if (!product12) {
            return {
                error: "Something went wrong..."
            }
        }
        await this.prisma.product.update({
            where: {id},
            data: body
        })
        return {
            message: "You have successfully updated your product!"
        }
    }
    async delete(id: number){
        const product12 = await this.prisma.product.findUnique({
            where: {id}
        })
        if (!product12) {
            return {
                error: "Something went wrong..."
            }
        }
        await this.prisma.product.delete({
            where: {id}
        })
        return {
            message: "Your product has been deleted!"
        }
    }
}
