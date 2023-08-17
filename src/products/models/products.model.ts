import { Prisma } from "@prisma/client";

export class Products implements Prisma.ProductsCreateManyInput {
    id: number;
    name: string;
    description: string;
    cost: number;
    currency: string;
    stockCount: number;
    category: string;
    images?: string[] | Prisma.ProductsCreateimagesInput;
}