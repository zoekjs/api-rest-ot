import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { WorkOrder } from '../.././work-order/entities/workOrder.entity';

@Entity()
export class Client {
    @PrimaryColumn()
    rut: number;

    @Column("varchar", { length: 50 })
    name: string;

    @Column("varchar", { length: 50 })
    last_name: string;

    @Column("varchar", { length: 150 })
    address: string;

    @Column("varchar", { length: 12 })
    phone: string;

    @CreateDateColumn({name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',})
    updatedAt: Date;

    @OneToMany(() => WorkOrder, workOrder => workOrder.client)
    workOrders: WorkOrder[];
}