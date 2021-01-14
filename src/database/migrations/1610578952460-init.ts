import {MigrationInterface, QueryRunner} from "typeorm";

export class init1610578952460 implements MigrationInterface {
    name = 'init1610578952460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `work_order_detail` (`work_order_detail_id` int NOT NULL AUTO_INCREMENT, `quantity` int NOT NULL, `description` varchar(255) NOT NULL, `price` int NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `work_order_id` int NULL, PRIMARY KEY (`work_order_detail_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `work_order` (`work_order_id` int NOT NULL AUTO_INCREMENT, `client_rut` int NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`work_order_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `client` (`rut` int NOT NULL, `name` varchar(50) NOT NULL, `last_name` varchar(50) NOT NULL, `address` varchar(150) NOT NULL, `phone` varchar(12) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`rut`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `work_order_detail` ADD CONSTRAINT `FK_ed1fbd1fe85ac89d3b3ba5cb550` FOREIGN KEY (`work_order_id`) REFERENCES `work_order`(`work_order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `work_order` ADD CONSTRAINT `FK_62579dc17352654f7eb118cd2fb` FOREIGN KEY (`client_rut`) REFERENCES `client`(`rut`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `work_order` DROP FOREIGN KEY `FK_62579dc17352654f7eb118cd2fb`");
        await queryRunner.query("ALTER TABLE `work_order_detail` DROP FOREIGN KEY `FK_ed1fbd1fe85ac89d3b3ba5cb550`");
        await queryRunner.query("DROP TABLE `client`");
        await queryRunner.query("DROP TABLE `work_order`");
        await queryRunner.query("DROP TABLE `work_order_detail`");
    }

}
