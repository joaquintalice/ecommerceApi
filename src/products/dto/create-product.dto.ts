import { Category } from "@prisma/client";
import { IsArray, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto {


    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @Min(0)
    cost: number;

    @IsNotEmpty()
    @IsString()
    currency: string;

    @IsNotEmpty()
    @Min(0)
    @IsInt()
    stockCount: number;

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    image: string[];

    @IsNumber()
    categoryId: number;

    category: Category

}
