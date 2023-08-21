/*
  Warnings:

  - You are about to drop the column `productCount` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `catProductId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `CatProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CatProduct" DROP CONSTRAINT "CatProduct_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_catProductId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "productCount";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "catProductId";

-- DropTable
DROP TABLE "CatProduct";
