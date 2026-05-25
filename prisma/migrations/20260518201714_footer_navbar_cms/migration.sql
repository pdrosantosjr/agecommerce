-- AlterTable
ALTER TABLE "SiteContent" ADD COLUMN     "footerDescription" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "footerEmail" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "footerInstagram" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "footerWhatsapp" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "navbarCasesText" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "navbarContactText" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "navbarFaqText" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "navbarServicesText" TEXT NOT NULL DEFAULT '';
