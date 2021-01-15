import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { WorkOrder } from '../.././work-order/entities/workOrder.entity';

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public rut: number;

  @Column("varchar", { length: 50 })
  public name: string;

  @Column("varchar", { length: 50 })
  public last_name: string;

  @Column("varchar", { length: 150 })
  public address: string;

  @Column("varchar", { length: 12 })
  public phone: string;

  @Column({nullable: true})
  public email: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', })
  public created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', })
  public updated_at: Date;

  @OneToMany(() => WorkOrder, workOrder => workOrder.client, { cascade: true, eager: true })
  public workOrders: WorkOrder[];

  constructor(data: any = null) {
    super();
    if (data) {
      this.rut = data.rut;
      this.name = data.name;
      this.last_name = data.lastname;
      this.address = data.address;
      this.phone = data.phone;
      this.workOrders = (data.workOrders)
        ? data.workOrders.map((workOrders: WorkOrder) => new WorkOrder(workOrders))
        : null;
      this.created_at = data.created_at;
      this.updated_at = data.updated_at;
    }
  }
}