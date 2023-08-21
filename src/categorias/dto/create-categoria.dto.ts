import { Product } from "@prisma/client";
import { IsInt, IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateCategoriaDto {

    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    description: string;



    product: Product[];


    productCount: string;


    @IsNotEmpty()
    @IsString()
    imgSrc: string;
}
