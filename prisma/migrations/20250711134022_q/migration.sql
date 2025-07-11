/*
  Warnings:

  - You are about to drop the column `service_name` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "service_name",
ADD COLUMN     "serviceName" TEXT;
