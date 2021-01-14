import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkOrderDetailController } from './controllers/work-order-detail/work-order-detail.controller';
import { WorkOrderDetail } from './entities/workOrderDetail.entity';
import { WorkOrderDetailService } from './services/work-order-detail/work-order-detail.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkOrderDetail])
  ],  
  controllers: [WorkOrderDetailController],
  providers: [WorkOrderDetailService]
})
export class WorkOrderDetailModule {}
