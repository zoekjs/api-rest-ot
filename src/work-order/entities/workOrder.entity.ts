import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, BaseEntity, Column } from 'typeorm';
import { Client } from '../.././clients/entities/clients.entity';
import { WorkOrderDetail } from '../../work-order-detail/entities/workOrderDetail.entity';

@Entity()
export class WorkOrder extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public brand: string;

  @Column()
  public model: string;

  @Column({ name: "total", nullable: true})
  public total: number;

  @ManyToOne(type => Client, { nullable: false, onDelete: 'CASCADE' })
  public client: number;

  @OneToMany(() => WorkOrderDetail, workOrderDetail => workOrderDetail.workOrder, { cascade: true, eager: true })
  public workOrderDetails: WorkOrderDetail[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', })
  public created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', })
  public updated_at: Date;

  constructor(data: any = null) {
    super();
    if (data) {
      this.id = data.id;
      this.client = data.client;
      this.brand = data.brand;
      this.model = data.model;
      this.total = data.total;
      this.workOrderDetails = (data.workOrderDetails)
        ? data.workOrderDetails.map((workOrderDetails: WorkOrderDetail) => new WorkOrderDetail(workOrderDetails))
        : null;
      this.created_at = data.created_at;
      this.updated_at = data.updated_at;
    }
  }
} 
