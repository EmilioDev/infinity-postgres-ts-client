/*
  Warnings:

  - You are about to drop the column `valueId` on the `evaluations` table. All the data in the column will be lost.
  - You are about to drop the column `evaluativeSchemeUsed` on the `institutions` table. All the data in the column will be lost.
  - You are about to drop the `evaluationSystemValues` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `evaluationSystems` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `value` to the `evaluations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "evaluationSystemValues" DROP CONSTRAINT "evaluationSystemValues_systemId_fkey";

-- DropForeignKey
ALTER TABLE "evaluations" DROP CONSTRAINT "evaluations_valueId_fkey";

-- DropForeignKey
ALTER TABLE "institutions" DROP CONSTRAINT "institutions_evaluativeSchemeUsed_fkey";

-- AlterTable
ALTER TABLE "evaluations" DROP COLUMN "valueId",
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "institutions" DROP COLUMN "evaluativeSchemeUsed";

-- DropTable
DROP TABLE "evaluationSystemValues";

-- DropTable
DROP TABLE "evaluationSystems";
