/*
  Warnings:

  - You are about to drop the column `usersName` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "usersName",
ADD COLUMN     "name" TEXT;
