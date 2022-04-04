/*
  Warnings:

  - You are about to drop the column `commentId` on the `Post` table. All the data in the column will be lost.
  - Added the required column `postId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_commentId_fkey";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "postId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "commentId";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
