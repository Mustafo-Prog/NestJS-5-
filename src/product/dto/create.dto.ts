import { IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator";

export class create {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    price: number;
}