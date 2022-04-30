/*
  Warnings:

  - You are about to drop the column `roomId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Message` table. All the data in the column will be lost.
  - Added the required column `toUserId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userFromId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userId_fkey";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "roomId",
DROP COLUMN "userId",
ADD COLUMN     "toUserId" TEXT NOT NULL,
ADD COLUMN     "userFromId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userFromId_fkey" FOREIGN KEY ("userFromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
