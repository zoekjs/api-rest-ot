import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column} from 'typeorm';
import { WorkOrder } from '../../work-order/entities/workOrder.entity';

@Entity()
export class WorkOrderDetail {
    @PrimaryGeneratedColumn()
    work_order_detail_id: number;

    @Column()
    quantity: number;

    @Column({ length: 255})
    description: string;

    @Column()
    price: number;

    @Column()
    work_order_id: number;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',})
    createAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP',})
    updatedAt: Date;

    @ManyToOne( type => WorkOrder, {cascade: true})
    @JoinColumn({ name: 'work_order_id'})
    workOrder: WorkOrder; 
}