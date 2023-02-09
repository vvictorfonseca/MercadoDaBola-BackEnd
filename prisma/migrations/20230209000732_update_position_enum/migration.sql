/*
  Warnings:

  - The values [LateralDireito,LateralEsquero] on the enum `Position` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Position_new" AS ENUM ('Goleiro', 'Zagueiro', 'Volante', 'Lateral', 'Meia', 'Atacante');
ALTER TABLE "players" ALTER COLUMN "position" TYPE "Position_new" USING ("position"::text::"Position_new");
ALTER TYPE "Position" RENAME TO "Position_old";
ALTER TYPE "Position_new" RENAME TO "Position";
DROP TYPE "Position_old";
COMMIT;
