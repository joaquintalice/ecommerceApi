import { BadRequestException, Injectable, Body } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoriasService {

  constructor(private prismaService: PrismaService) { }


  async create(createCategoriaDto: CreateCategoriaDto) {

    const { name, description, imgSrc } = createCategoriaDto;


    const createCategory = await this.prismaService.category.create({
      data: {
        name,
        description,
        imgSrc
      }
    });

    return createCategory;
  }

  async findAll() {
    const category = await this.prismaService.category.findMany({ include: { products: true } });

    const categoryWithCount = category.map((category) => {
      return {
        ...category,
        productCount: category.products.length
      }
    });

    return categoryWithCount
  }

  async findOne(id: number) {

    try {
      const category = await this.prismaService.category.findUnique({
        where: { id: id },
        include: { products: true }
      });

      return category;

    } catch (error) {
      console.log(error)
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(error.message);
      }
      throw new Error(`Unknown error`);
    }

  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
