/*
  Warnings:

  - You are about to drop the `testcase` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."testcase";

-- CreateTable
CREATE TABLE "public"."sampleinput" (
    "id" INTEGER NOT NULL,
    "data" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."sampleoutput" (
    "id" INTEGER NOT NULL,
    "data" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."input" (
    "id" INTEGER NOT NULL,
    "data" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."output" (
    "id" INTEGER NOT NULL,
    "data" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "sampleinput_id_key" ON "public"."sampleinput"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sampleoutput_id_key" ON "public"."sampleoutput"("id");

-- CreateIndex
CREATE UNIQUE INDEX "input_id_key" ON "public"."input"("id");

-- CreateIndex
CREATE UNIQUE INDEX "output_id_key" ON "public"."output"("id");
