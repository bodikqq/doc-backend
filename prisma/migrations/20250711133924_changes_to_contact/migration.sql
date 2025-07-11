/*
  Warnings:

  - You are about to drop the column `contact` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "contact",
ADD COLUMN     "chosenDate" TIMESTAMP(3),
ADD COLUMN     "email" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "serviceId" INTEGER,
ADD COLUMN     "service_name" TEXT,
ALTER COLUMN "text" DROP NOT NULL;
