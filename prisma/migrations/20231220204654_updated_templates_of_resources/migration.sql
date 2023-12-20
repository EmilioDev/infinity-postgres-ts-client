/*
  Warnings:

  - You are about to drop the column `data` on the `resources` table. All the data in the column will be lost.
  - You are about to drop the column `resourceTemplate` on the `resources` table. All the data in the column will be lost.
  - Added the required column `resourceTemplateId` to the `resources` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "resources" DROP COLUMN "data",
DROP COLUMN "resourceTemplate",
ADD COLUMN     "resourceTemplateId" INTEGER NOT NULL,
ADD COLUMN     "templateCustomValues" JSONB;

-- CreateTable
CREATE TABLE "resourceTemplates" (
    "identifier" SERIAL NOT NULL,
    "content" JSONB,
    "templateName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resourceTemplates_pkey" PRIMARY KEY ("identifier")
);

-- AddForeignKey
ALTER TABLE "resources" ADD CONSTRAINT "resources_resourceTemplateId_fkey" FOREIGN KEY ("resourceTemplateId") REFERENCES "resourceTemplates"("identifier") ON DELETE RESTRICT ON UPDATE CASCADE;
