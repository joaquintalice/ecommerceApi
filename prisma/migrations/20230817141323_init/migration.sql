-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "images" TEXT[],
    "name" TEXT NOT NULL,
    "stockCount" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
