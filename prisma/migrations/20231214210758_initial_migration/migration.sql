-- CreateTable
CREATE TABLE "users" (
    "identifier" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "country" TEXT,
    "degrees" TEXT,
    "photo" TEXT,
    "password_hash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "institutions" (
    "identifier" SERIAL NOT NULL,
    "NIT" TEXT NOT NULL,
    "REEUP" TEXT NOT NULL,
    "website" TEXT,
    "address" TEXT,
    "evaluativeSchemeUsed" TEXT NOT NULL DEFAULT '1;2;3;4;5',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rector" INTEGER NOT NULL,

    CONSTRAINT "institutions_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "metodologist" (
    "identifier" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "metodologist_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "course" (
    "identifier" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "grade" INTEGER NOT NULL DEFAULT 1,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "institutionId" INTEGER NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "resources" (
    "identifier" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "photo" TEXT,
    "requiresOnline" BOOLEAN NOT NULL DEFAULT false,
    "evaluation" INTEGER NOT NULL DEFAULT 0,
    "data" JSONB,

    CONSTRAINT "resources_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "teachers" (
    "identifier" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "students" (
    "identifier" SERIAL NOT NULL,
    "pendingApproval" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "evaluations" (
    "identifier" SERIAL NOT NULL,
    "valueId" INTEGER NOT NULL,
    "evaluationName" TEXT,
    "isFinal" BOOLEAN NOT NULL DEFAULT false,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "evaluations_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "evaluationSystems" (
    "identifier" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "evaluationSystems_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "evaluationSystemValues" (
    "identifier" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "description" TEXT,
    "systemId" INTEGER NOT NULL,

    CONSTRAINT "evaluationSystemValues_pkey" PRIMARY KEY ("identifier")
);

-- CreateIndex
CREATE UNIQUE INDEX "institutions_NIT_key" ON "institutions"("NIT");

-- CreateIndex
CREATE UNIQUE INDEX "institutions_REEUP_key" ON "institutions"("REEUP");

-- AddForeignKey
ALTER TABLE "institutions" ADD CONSTRAINT "institutions_rector_fkey" FOREIGN KEY ("rector") REFERENCES "users"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "metodologist" ADD CONSTRAINT "metodologist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "metodologist" ADD CONSTRAINT "metodologist_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "institutions"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_valueId_fkey" FOREIGN KEY ("valueId") REFERENCES "evaluationSystemValues"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluationSystemValues" ADD CONSTRAINT "evaluationSystemValues_systemId_fkey" FOREIGN KEY ("systemId") REFERENCES "evaluationSystems"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;
