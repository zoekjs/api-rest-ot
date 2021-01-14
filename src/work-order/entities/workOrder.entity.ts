import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany, Column } from 'typeorm';
import { Client } from '../.././clients/entities/clients.entity';
import { WorkOrderDetail } from '../../work-order-detail/entities/workOrderDetail.entity';

@Entity()
export class WorkOrder {
    @PrimaryGeneratedColumn()
    work_order_id: number;

    @Column()
    client_rut: number;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

    @ManyToOne(type => Client, {cascade: true, eager: true, nullable:false})
    @JoinColumn({name: 'client_rut'})
    client: Client;
    
    @OneToMany(() => WorkOrderDetail, workOrderDetail => workOrderDetail.workOrder)
    workOrderDetails: WorkOrderDetail[];
} 
