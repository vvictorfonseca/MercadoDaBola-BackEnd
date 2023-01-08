/*
  Warnings:

  - You are about to drop the `tranfers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_transferId_fkey";

-- DropForeignKey
ALTER TABLE "tranfers" DROP CONSTRAINT "tranfers_from_fkey";

-- DropForeignKey
ALTER TABLE "tranfers" DROP CONSTRAINT "tranfers_playerId_fkey";

-- DropForeignKey
ALTER TABLE "tranfers" DROP CONSTRAINT "tranfers_to_fkey";

-- DropTable
DROP TABLE "tranfers";

-- CreateTable
CREATE TABLE "transfers" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "from" INTEGER NOT NULL,
    "to" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "transferDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transfers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "transfers_from_to_idx" ON "transfers"("from", "to");

-- AddForeignKey
ALTER TABLE "transfers" ADD CONSTRAINT "transfers_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfers" ADD CONSTRAINT "transfers_from_fkey" FOREIGN KEY ("from") REFERENCES "clubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfers" ADD CONSTRAINT "transfers_to_fkey" FOREIGN KEY ("to") REFERENCES "clubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_transferId_fkey" FOREIGN KEY ("transferId") REFERENCES "transfers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
