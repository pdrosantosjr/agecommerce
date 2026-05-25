-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "segment" TEXT,
    "address" TEXT,
    "service" TEXT,
    "monthlyFee" TEXT,
    "dueDay" INTEGER,
    "notes" TEXT,
    "contractStatus" TEXT NOT NULL DEFAULT 'Ativo',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
