import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkOrderController } from './controllers/work-order/work-order.controller';
import { WorkOrder } from './entities/workOrder.entity';
import { WorkOrderService } from './services/work-order/work-order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkOrder])
  ],
  controllers: [WorkOrderController],
  providers: [WorkOrderService]
})
export class WorkOrderModule {}
