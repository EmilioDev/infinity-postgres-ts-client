/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `evaluationSystems` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "evaluationSystemValues" ALTER COLUMN "name" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "evaluationSystems_name_key" ON "evaluationSystems"("name");
