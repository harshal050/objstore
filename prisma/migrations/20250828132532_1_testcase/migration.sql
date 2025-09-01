-- CreateTable
CREATE TABLE "public"."testcase" (
    "id" TEXT NOT NULL,
    "problem_id" INTEGER NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "testcase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "testcase_id_key" ON "public"."testcase"("id");

-- CreateIndex
CREATE UNIQUE INDEX "testcase_problem_id_key" ON "public"."testcase"("problem_id");
