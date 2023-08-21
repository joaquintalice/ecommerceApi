import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {

  constructor(private prismaService: PrismaService) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { name, description, cost, currency, image, categoryId, stockCount } = createProductDto;

    const newProduct = await this.prismaService.product.create({
      data: {
        name,
        description,
        cost,
        currency,
        image,
        category: { connect: { id: categoryId } },
        stockCount
      },
      include: {
        relatedProducts: true,
        category: true
      }
    });

    return newProduct;
  }

  async findAll() {
    return await this.prismaService.product.findMany({ include: { category: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
