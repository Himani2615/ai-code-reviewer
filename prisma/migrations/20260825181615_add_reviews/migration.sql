-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "repositoryId" INTEGER NOT NULL,
    "repositoryName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Review_repositoryId_filePath_idx" ON "Review"("repositoryId", "filePath");
