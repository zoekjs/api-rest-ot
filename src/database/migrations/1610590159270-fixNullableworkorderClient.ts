import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNullableworkorderClient1610590159270 implements MigrationInterface {
    name = 'fixNullableworkorderClient1610590159270'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `work_order_detail` DROP FOREIGN KEY `FK_ed1fbd1fe85ac89d3b3ba5cb550`");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `work_order_id` `work_order_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `updated` `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `client` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `client` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `work_order_detail` ADD CONSTRAINT `FK_ed1fbd1fe85ac89d3b3ba5cb550` FOREIGN KEY (`work_order_id`) REFERENCES `work_order`(`work_order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `work_order_detail` DROP FOREIGN KEY `FK_ed1fbd1fe85ac89d3b3ba5cb550`");
        await queryRunner.query("ALTER TABLE `client` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `client` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `updated` `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `created_at` `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `work_order_detail` CHANGE `work_order_id` `work_order_id` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `work_order_detail` ADD CONSTRAINT `FK_ed1fbd1fe85ac89d3b3ba5cb550` FOREIGN KEY (`work_order_id`) REFERENCES `work_order`(`work_order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
