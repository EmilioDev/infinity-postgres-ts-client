-- CreateTable
CREATE TABLE "users" (
    "identifier" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING,
    "last_name" STRING,
    "phone" STRING,
    "email" STRING,
    "country" STRING,
    "degrees" STRING,
    "photo" STRING,
    "password_hash" STRING NOT NULL,
    "isSuperUser" BOOL NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "institutions" (
    "identifier" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "description" STRING,
    "logo" STRING,
    "NIT" STRING NOT NULL,
    "REEUP" STRING NOT NULL,
    "website" STRING,
    "address" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rector" INT8 NOT NULL,

    CONSTRAINT "institutions_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "metodologist" (
    "identifier" INT8 NOT NULL DEFAULT unique_rowid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INT8 NOT NULL,
    "courseId" INT8 NOT NULL,

    CONSTRAINT "metodologist_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "course" (
    "identifier" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "year" INT4 NOT NULL DEFAULT 1,
    "description" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "institutionId" INT8 NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "resources" (
    "identifier" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING,
    "description" STRING,
    "photo" STRING,
    "requiresOnline" BOOL NOT NULL DEFAULT false,
    "evaluation" FLOAT8 NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "resourceTemplateId" INT8 NOT NULL,
    "templateCustomValues" JSONB,

    CONSTRAINT "resources_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "resourceTemplates" (
    "identifier" INT8 NOT NULL DEFAULT unique_rowid(),
    "content" JSONB,
    "templateName" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resourceTemplates_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "teachers" (
    "identifier" INT8 NOT NULL DEFAULT unique_rowid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" INT8 NOT NULL,
    "userId" INT8 NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "students" (
    "identifier" INT8 NOT NULL DEFAULT unique_rowid(),
    "pendingApproval" BOOL NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INT8 NOT NULL,
    "courseId" INT8 NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "evaluations" (
    "identifier" INT8 NOT NULL DEFAULT unique_rowid(),
    "value" FLOAT8 NOT NULL,
    "evaluationName" STRING,
    "isFinal" BOOL NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentId" INT8 NOT NULL,

    CONSTRAINT "evaluations_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "init" (
    "identifier" UUID NOT NULL,

    CONSTRAINT "init_pkey" PRIMARY KEY ("identifier")
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
ALTER TABLE "resources" ADD CONSTRAINT "resources_resourceTemplateId_fkey" FOREIGN KEY ("resourceTemplateId") REFERENCES "resourceTemplates"("identifier") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evaluations" ADD CONSTRAINT "evaluations_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students"("identifier") ON DELETE CASCADE ON UPDATE CASCADE;
