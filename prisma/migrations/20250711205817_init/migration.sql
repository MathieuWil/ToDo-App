-- CreateTable
CREATE TABLE `Carte` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `etat` INTEGER NOT NULL DEFAULT 1,
    `titre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
