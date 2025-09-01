-- CreateTable
CREATE TABLE "public"."source_code" (
    "id" INTEGER NOT NULL,
    "data" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "source_code_id_key" ON "public"."source_code"("id");
