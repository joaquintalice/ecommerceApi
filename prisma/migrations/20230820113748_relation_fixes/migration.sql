/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "catProductId" INTEGER;

-- CreateTable
CREATE TABLE "CatProduct" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "catName" TEXT NOT NULL,

    CONSTRAINT "CatProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "CatProduct" ADD CONSTRAINT "CatProduct_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_catProductId_fkey" FOREIGN KEY ("catProductId") REFERENCES "CatProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;
