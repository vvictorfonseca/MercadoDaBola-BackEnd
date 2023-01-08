-- CreateEnum
CREATE TYPE "Position" AS ENUM ('Goleiro', 'Zagueiro', 'LateralDireito', 'LateralEsquero', 'Meia', 'Atacante');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Fechado', 'Melou', 'Negociando');

-- CreateTable
CREATE TABLE "players" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "position" "Position" NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clubs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "clubs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tranfers" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "from" INTEGER NOT NULL,
    "to" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "transferDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tranfers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" SERIAL NOT NULL,
    "transferId" INTEGER NOT NULL,
    "liked" BOOLEAN NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clubs_name_key" ON "clubs"("name");

-- CreateIndex
CREATE INDEX "tranfers_from_to_idx" ON "tranfers"("from", "to");

-- AddForeignKey
ALTER TABLE "tranfers" ADD CONSTRAINT "tranfers_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tranfers" ADD CONSTRAINT "tranfers_from_fkey" FOREIGN KEY ("from") REFERENCES "clubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tranfers" ADD CONSTRAINT "tranfers_to_fkey" FOREIGN KEY ("to") REFERENCES "clubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_transferId_fkey" FOREIGN KEY ("transferId") REFERENCES "tranfers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
