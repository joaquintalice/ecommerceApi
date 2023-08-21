/*
  Warnings:

  - You are about to drop the column `categoryName` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "productCount" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryName";
