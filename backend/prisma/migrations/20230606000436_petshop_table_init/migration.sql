-- CreateTable
CREATE TABLE `Pet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `type` ENUM('CAT', 'DOG') NOT NULL,
    `breed` VARCHAR(191) NOT NULL,
    `owner` VARCHAR(191) NOT NULL,
    `ownerPhone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
