-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "nextContactAt" TIMESTAMP(3),
ALTER COLUMN "updatedAt" DROP DEFAULT;
