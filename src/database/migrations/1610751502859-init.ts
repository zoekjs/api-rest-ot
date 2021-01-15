import {MigrationInterface, QueryRunner} from "typeorm";

export class update1610751502859 implements MigrationInterface {
    name = 'update1610751502859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `work_order_detail` (`id` int NOT NULL AUTO_INCREMENT, `quantity` int NOT NULL, `description` varchar(255) NOT NULL, `price` int NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `workOrderId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `work_order` (`id` int NOT NULL AUTO_INCREMENT, `brand` varchar(255) NOT NULL, `model` varchar(255) NOT NULL, `total` int NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `clientId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `client` (`id` int NOT NULL AUTO_INCREMENT, `rut` int NOT NULL, `name` varchar(50) NOT NULL, `last_name` varchar(50) NOT NULL, `address` varchar(150) NOT NULL, `phone` varchar(12) NOT NULL, `email` varchar(255) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE INDEX `IDX_c585d4282f16dc1b113b3fa051` (`rut`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `work_order_detail` ADD CONSTRAINT `FK_1e06cda5134b5b6ac0cdc303419` FOREIGN KEY (`workOrderId`) REFERENCES `work_order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `work_order` ADD CONSTRAINT `FK_9c72b049b7e40b31953781a6016` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `work_order` DROP FOREIGN KEY `FK_9c72b049b7e40b31953781a6016`");
        await queryRunner.query("ALTER TABLE `work_order_detail` DROP FOREIGN KEY `FK_1e06cda5134b5b6ac0cdc303419`");
        await queryRunner.query("DROP INDEX `IDX_c585d4282f16dc1b113b3fa051` ON `client`");
        await queryRunner.query("DROP TABLE `client`");
        await queryRunner.query("DROP TABLE `work_order`");
        await queryRunner.query("DROP TABLE `work_order_detail`");
    }

}
