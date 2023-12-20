/*
  Warnings:

  - You are about to drop the column `grade` on the `course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "course" DROP COLUMN "grade",
ADD COLUMN     "year" INTEGER NOT NULL DEFAULT 1;
