/*
  Warnings:

  - You are about to drop the column `chosenDate` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "chosenDate",
ADD COLUMN     "date" TIMESTAMP(3);
