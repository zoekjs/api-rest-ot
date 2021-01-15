import {MigrationInterface, QueryRunner} from "typeorm";

export class updateClient1610751689409 implements MigrationInterface {
    name = 'updateClient1610751689409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `work_order_detail` DROP FOREIGN KEY `FK_1e06cda5134b5b6ac0cdc303419`");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `workOrderId` `workOrderId` int NULL");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `total` `total` int NULL");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `client` CHANGE `email` `email` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `client` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `client` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order_detail` ADD CONSTRAINT `FK_1e06cda5134b5b6ac0cdc303419` FOREIGN KEY (`workOrderId`) REFERENCES `work_order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `work_order_detail` DROP FOREIGN KEY `FK_1e06cda5134b5b6ac0cdc303419`");
        await queryRunner.query("ALTER TABLE `client` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `client` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `client` CHANGE `email` `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `total` `total` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `workOrderId` `workOrderId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order_detail` ADD CONSTRAINT `FK_1e06cda5134b5b6ac0cdc303419` FOREIGN KEY (`workOrderId`) REFERENCES `work_order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
