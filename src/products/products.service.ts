import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class ProductsService {

  private readonly logger = new Logger('ProductsService');

  constructor(private prisma: PrismaService) { }

  async create(createProductDto: CreateProductDto) {

    try {
      const { images, ...productData } = createProductDto;

      const createdProduct = await this.prisma.products.create({
        data: {
          ...productData,
          images: { set: images },
        },
      });

      return createdProduct;
    } catch (error) {
      this.handleDBExceptions(error);
    }

  }


  async findAll() {
    const products = await this.prisma.products.findMany();
    return products;
  }

  async findOne(id: number) {
    const product = await this.prisma.products.findFirst({ where: { id: id } });
    if (!product) throw new BadRequestException(`test`);
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const { images, ...productData } = updateProductDto;

    const updatedProduct = await this.prisma.products.update({
      where: { id },
      data: {
        ...productData,
        images: { set: images },
      },
    });

    return updatedProduct;
  }

  async remove(id: number) {
    const product = await this.prisma.products.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    await this.prisma.products.delete({
      where: { id },
    });

    return product;
  }



  private handleDBExceptions(error: any) {

    if (error.code === 'P2002') throw new BadRequestException(error.detail);

    this.logger.error(error);

    console.log(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }

}