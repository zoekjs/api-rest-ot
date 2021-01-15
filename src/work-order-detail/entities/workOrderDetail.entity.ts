import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, BaseEntity } from 'typeorm';
import { WorkOrder } from '../../work-order/entities/workOrder.entity';

@Entity()
export class WorkOrderDetail extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column()
  public quantity: number;

  @Column({ length: 255 })
  public description: string;

  @Column()
  public price: number;

  @ManyToOne(type => WorkOrder)
  public workOrder: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', })
  public created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', })
  public updated_at: Date;

  constructor(data: any = null) {
    super();
    if (data) {
      this.id = data.id;
      this.quantity = data.quantity;
      this.description = data.description;
      this.price = data.price;
      this.workOrder = data.workOrder;
      this.created_at = data.created_at;
      this.updated_at = data.updated_at;
    }
  }
}