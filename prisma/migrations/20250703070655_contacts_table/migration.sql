-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "usersName" TEXT,
    "contact" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "answered" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
