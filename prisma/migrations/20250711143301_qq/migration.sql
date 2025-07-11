/*
  Warnings:

  - You are about to drop the column `text` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "text",
ADD COLUMN     "message" TEXT;
