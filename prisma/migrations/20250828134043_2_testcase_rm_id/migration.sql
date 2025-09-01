/*
  Warnings:

  - The primary key for the `testcase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `data` on the `testcase` table. All the data in the column will be lost.
  - You are about to drop the column `problem_id` on the `testcase` table. All the data in the column will be lost.
  - Added the required column `input` to the `testcase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `output` to the `testcase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sampleinput` to the `testcase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sampleoutput` to the `testcase` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `testcase` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "public"."testcase_problem_id_key";

-- AlterTable
ALTER TABLE "public"."testcase" DROP CONSTRAINT "testcase_pkey",
DROP COLUMN "data",
DROP COLUMN "problem_id",
ADD COLUMN     "input" TEXT NOT NULL,
ADD COLUMN     "output" TEXT NOT NULL,
ADD COLUMN     "sampleinput" TEXT NOT NULL,
ADD COLUMN     "sampleoutput" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "testcase_id_key" ON "public"."testcase"("id");
