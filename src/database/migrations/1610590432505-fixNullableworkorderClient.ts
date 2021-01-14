import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNullableworkorderClient1610590432505 implements MigrationInterface {
    name = 'fixNullableworkorderClient1610590432505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `work_order` DROP FOREIGN KEY `FK_62579dc17352654f7eb118cd2fb`");
        await queryRunner.query("ALTER TABLE `work_order` ADD `rut` int NOT NULL");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `updated` `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `client` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `client` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order` ADD CONSTRAINT `FK_108a0a650b8da98a6a0c84d0240` FOREIGN KEY (`rut`) REFERENCES `client`(`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `work_order` DROP FOREIGN KEY `FK_108a0a650b8da98a6a0c84d0240`");
        await queryRunner.query("ALTER TABLE `client` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `client` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `updated` `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order` DROP COLUMN `rut`");
        await queryRunner.query("ALTER TABLE `work_order` ADD CONSTRAINT `FK_62579dc17352654f7eb118cd2fb` FOREIGN KEY (`client_rut`) REFERENCES `client`(`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
