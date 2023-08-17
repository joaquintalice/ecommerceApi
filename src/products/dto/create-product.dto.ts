import { IsNotEmpty, IsNumber, IsString, IsArray, Min, IsInt, ArrayNotEmpty, ValidateNested } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsInt()
    cost: number;

    @IsNotEmpty()
    @IsString()
    currency: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    stockCount: number;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    images: string[];

}