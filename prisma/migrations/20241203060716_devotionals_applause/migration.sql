-- CreateTable
CREATE TABLE "DevotionalsApplause" (
    "devotionalId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DevotionalsApplause_devotionalId_key" ON "DevotionalsApplause"("devotionalId");
