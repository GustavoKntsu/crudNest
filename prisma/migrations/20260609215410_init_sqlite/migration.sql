/*
  Warnings:

  - You are about to drop the column `enderco` on the `Cinema` table. All the data in the column will be lost.
  - Added the required column `endereco` to the `Cinema` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cinema" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);
INSERT INTO "new_Cinema" ("id", "nome") SELECT "id", "nome" FROM "Cinema";
DROP TABLE "Cinema";
ALTER TABLE "new_Cinema" RENAME TO "Cinema";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
