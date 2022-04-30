/*
  Warnings:

  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_userId_fkey";

-- DropTable
DROP TABLE "Room";
