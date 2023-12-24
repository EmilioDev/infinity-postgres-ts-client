/*
  Warnings:

  - Changed the type of `evaluativeSchemeUsed` on the `institutions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "institutions" DROP COLUMN "evaluativeSchemeUsed",
ADD COLUMN     "evaluativeSchemeUsed" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "institutions" ADD CONSTRAINT "institutions_evaluativeSchemeUsed_fkey" FOREIGN KEY ("evaluativeSchemeUsed") REFERENCES "evaluationSystems"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;
