/*
  Warnings:

  - The `status` column on the `lead` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('POTENTIAL', 'CONFIRMED', 'ANALYSIS');

-- AlterTable
ALTER TABLE "lead" ADD COLUMN     "opportunities" JSONB NOT NULL DEFAULT '[]',
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'POTENTIAL';
